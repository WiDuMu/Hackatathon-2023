// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        username: '',
        password: '',
        user: '',
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
})
