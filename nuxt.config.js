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
  rules: [
    {
      test: /\.scss$/,
      use: ["vue-style-loader", "css-loader", "sass-loader"]
    }
  ],

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  axios: {
    baseURL: "https://6082be765dbd2c001757a628.mockapi.io/api/v1/"
  },
  router: {
    linkActiveClass: "app-link--active",
    linkExactActiveClass: "app-link--exact"
  },
  build: {}
};
