/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export {}

declare global {
  interface Window {
    showSnackbar: (message: string) => void
  }
}
