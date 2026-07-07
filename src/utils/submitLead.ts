type LeadFormData = {
  name: string
  email: string
  phone: string
  service?: string
  message?: string
}

const HIGHLEVEL_BASE_URL = 'https://services.leadconnectorhq.com'

function parseName(fullName: string) {
  const trimmed = fullName.trim()
  if (!trimmed) return { firstName: '', lastName: '' }

  const parts = trimmed.split(/\s+/)
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  }
}

async function getErrorMessage(response: Response): Promise<string> {
  const text = (await response.text()).trim()
  if (!text) return ''

  try {
    const parsed = JSON.parse(text)
    const baseError = typeof parsed?.error === 'string' ? parsed.error : ''
    const details = typeof parsed?.details === 'string' ? parsed.details : ''
    return [baseError, details].filter(Boolean).join(' ').trim() || text
  } catch {
    return text
  }
}

async function submitViaConfiguredEndpoint(submitUrl: string, formData: LeadFormData): Promise<void> {
  const response = await fetch(submitUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (response.ok) return

  const message = await getErrorMessage(response)

  if (response.status === 404 && submitUrl.startsWith('/api/')) {
    throw new Error('Form endpoint not found on this deployment. Configure VITE_FORM_SUBMIT_URL or enable direct HighLevel submission env vars.')
  }

  throw new Error(message || `Unable to submit your request right now (HTTP ${response.status}).`)
}

async function submitDirectToHighLevel(formData: LeadFormData): Promise<void> {
  const apiKey = import.meta.env.VITE_GHL_API_KEY?.trim()
  const locationId = import.meta.env.VITE_GHL_LOCATION_ID?.trim()

  if (!apiKey || !locationId) {
    throw new Error('Form submission is not configured. Set VITE_FORM_SUBMIT_URL or provide VITE_GHL_API_KEY and VITE_GHL_LOCATION_ID.')
  }

  const normalizedName = formData.name.trim()
  const normalizedEmail = formData.email.trim()
  const normalizedPhone = formData.phone.trim()
  const normalizedService = (formData.service || '').trim()
  const normalizedMessage = (formData.message || '').trim()

  if (!normalizedName || !normalizedEmail || !normalizedPhone) {
    throw new Error('Name, email, and phone are required.')
  }

  const { firstName, lastName } = parseName(normalizedName)
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const basePayload = {
    locationId,
    firstName,
    lastName,
    email: normalizedEmail,
    phone: normalizedPhone,
    source: 'Website Contact Form',
    tags: ['Website Lead'],
  }

  let response = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...basePayload,
      customFields: [
        { key: 'service_needed', field_value: normalizedService || 'Not specified' },
        { key: 'lead_message', field_value: normalizedMessage || 'No message provided' },
      ],
    }),
  })

  if (!response.ok) {
    const firstErrorMessage = await getErrorMessage(response)
    const maybeCustomFieldError = response.status === 400 && /custom\s*field|field|invalid|schema|key/i.test(firstErrorMessage)

    if (maybeCustomFieldError) {
      response = await fetch(`${HIGHLEVEL_BASE_URL}/contacts/`, {
        method: 'POST',
        headers,
        body: JSON.stringify(basePayload),
      })

      if (response.ok) return

      const secondErrorMessage = await getErrorMessage(response)
      throw new Error(secondErrorMessage || `Unable to submit your request right now (HTTP ${response.status}).`)
    }

    throw new Error(firstErrorMessage || `Unable to submit your request right now (HTTP ${response.status}).`)
  }
}

export async function submitLead(formData: LeadFormData): Promise<void> {
  const submitUrl = import.meta.env.VITE_FORM_SUBMIT_URL?.trim()

  if (submitUrl) {
    await submitViaConfiguredEndpoint(submitUrl, formData)
    return
  }

  await submitDirectToHighLevel(formData)
}
