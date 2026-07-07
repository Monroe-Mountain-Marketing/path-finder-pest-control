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
    const { name = '', email = '', phone = '', service = '', message = '' } = req.body || {}

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' })
    }

    const { firstName, lastName } = parseName(name)

    const payload = {
      locationId,
      firstName,
      lastName,
      email,
      phone,
      source: 'Website Contact Form',
      tags: ['Website Lead'],
      customFields: [
        {
          key: 'service_needed',
          field_value: service || 'Not specified',
        },
        {
          key: 'lead_message',
          field_value: message || 'No message provided',
        },
      ],
    }

    const ghlResponse = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text()
      return res.status(ghlResponse.status).json({
        error: 'Failed to submit lead to HighLevel.',
        details: errorText,
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
