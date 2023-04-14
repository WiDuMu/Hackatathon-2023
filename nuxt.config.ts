// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        username: '',
        password: '',
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
})
