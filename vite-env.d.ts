/// <reference types="vite/client" />

declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.mjs';
declare module 'pdfjs-dist/build/pdf.worker.mjs?url';

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_LINK_TO_GITHUB?: string;
  readonly VITE_LINK_TO_LINKEDIN?: string;
  readonly VITE_IP_Server?: string;
  readonly VITE_MAIL?: string;
  readonly VITE_NAME?: string;
  // add other env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
