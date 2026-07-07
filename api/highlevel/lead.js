const HIGHLEVEL_BASE_URL = process.env.HIGHLEVEL_API_BASE || 'https://services.leadconnectorhq.com'

function parseName(fullName = '') {
  const trimmed = fullName.trim()
  if (!trimmed) return { firstName: '', lastName: '' }

  const parts = trimmed.split(/\s+/)
  const firstName = parts[0]
  const lastName = parts.slice(1).join(' ')

  return { firstName, lastName }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.VITE_GHL_API_KEY
  const locationId = process.env.VITE_GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    return res.status(500).json({ error: 'HighLevel is not configured on the server.' })
  }

  try {
    const parsedBody = typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : (req.body || {})

    const { name = '', email = '', phone = '', service = '', message = '' } = parsedBody
    const normalizedName = String(name).trim()
    const normalizedEmail = String(email).trim()
    const normalizedPhone = String(phone).trim()
    const normalizedService = String(service).trim()
    const normalizedMessage = String(message).trim()

    if (!normalizedName || !normalizedEmail || !normalizedPhone) {
      return res.status(400).json({
        error: 'Name, email, and phone are required.',
        details: {
          hasName: Boolean(normalizedName),
          hasEmail: Boolean(normalizedEmail),
          hasPhone: Boolean(normalizedPhone),
        },
      })
    }

    const { firstName, lastName } = parseName(normalizedName)

    const basePayload = {
      locationId,
      firstName,
      lastName,
      email: normalizedEmail,
      phone: normalizedPhone,
      source: 'Website Contact Form',
      tags: ['Website Lead'],
    }

    const payloadWithCustomFields = {
      ...basePayload,
      customFields: [
        {
          key: 'service_needed',
          field_value: normalizedService || 'Not specified',
        },
        {
          key: 'lead_message',
          field_value: normalizedMessage || 'No message provided',
        },
      ],
    }

    const requestHeaders = {
      Authorization: `Bearer ${apiKey}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    let ghlResponse = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(payloadWithCustomFields),
    })

    // Some HighLevel locations reject unknown custom fields; retry without them so leads still save.
    if (!ghlResponse.ok) {
      const firstErrorText = await ghlResponse.text()
      const maybeCustomFieldError = ghlResponse.status === 400
        && /custom\s*field|field|invalid|schema|key/i.test(firstErrorText)

      if (maybeCustomFieldError) {
        ghlResponse = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
          method: 'POST',
          headers: requestHeaders,
          body: JSON.stringify(basePayload),
        })

        if (!ghlResponse.ok) {
          const secondErrorText = await ghlResponse.text()
          return res.status(ghlResponse.status).json({
            error: 'Failed to submit lead to HighLevel.',
            details: secondErrorText,
            fallbackAttempted: true,
            fallbackReason: firstErrorText,
          })
        }

        const fallbackData = await ghlResponse.json()
        return res.status(200).json({
          ok: true,
          contactId: fallbackData?.contact?.id || null,
          warning: 'Lead was saved without custom fields. Verify custom field keys in HighLevel.',
        })
      }

      return res.status(ghlResponse.status).json({
        error: 'Failed to submit lead to HighLevel.',
        details: firstErrorText,
      })
    }

    const data = await ghlResponse.json()
    return res.status(200).json({ ok: true, contactId: data?.contact?.id || null })
  } catch (error) {
    return res.status(500).json({
      error: 'Unexpected error while submitting lead.',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
