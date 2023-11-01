// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  app: {
    head: {
      title: "The Sandbox @ Las Positas CyberSecurity Clubb",
      description: "Interactive challenges to get hands-on experience with cybersecurity concepts.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#0F1729" },
        { name: "og:image", content: "https://cyber.lehuy.dev/cover.png" },
        { name: "twitter:image", content: "https://cyber.lehuy.dev/cover.png" },
        { itemprop: "image", content: "https://cyber.lehuy.dev/cover.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
})
