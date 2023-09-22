import { VQuillEditor } from '@morpheme/quill-editor'

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component('aa', VQuillEditor)
})
