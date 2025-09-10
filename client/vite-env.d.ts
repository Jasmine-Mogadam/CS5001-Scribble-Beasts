/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
    readonly VITE_NGINX_PORT: string;
    // Add other VITE_ variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}