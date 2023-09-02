/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENWEATHER_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}