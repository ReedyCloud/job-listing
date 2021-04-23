export default {
  ssr: true,
  head: {
    title: "job-listing",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  axios: {
    baseURL: "https://6082be765dbd2c001757a628.mockapi.io/api/v1/"
  },

  build: {}
};
