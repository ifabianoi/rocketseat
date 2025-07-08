/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_PRODUCTION: string;
  // adicione outras variáveis públicas aqui se quiser
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}