import { isoImport } from 'vite-plugin-iso-import'

export default defineNuxtConfig({
  vite: {
    plugins: [
      isoImport(),
    ]
  }
})
