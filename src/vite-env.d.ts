/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FORM_SUBMIT_URL?: string
	readonly VITE_GHL_API_KEY?: string
	readonly VITE_GHL_LOCATION_ID?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
