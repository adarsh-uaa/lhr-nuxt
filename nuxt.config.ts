const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  modules: ['@nuxt/image', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: { url: siteUrl, name: 'UK Airport Assistance', description: 'Premium airport meet and greet and VIP assistance across the United Kingdom.' },
  runtimeConfig: { public: { siteUrl, bookingEmail: process.env.NUXT_PUBLIC_BOOKING_EMAIL || '' } },
  app: { head: { htmlAttrs: { lang: 'en-GB' }, link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600&display=swap' }
  ] } },
  routeRules: { '/': { prerender: true }, '/airports': { prerender: true }, '/services': { prerender: true }, '/about': { prerender: true }, '/faq': { prerender: true }, '/contact': { prerender: true }, '/book': { ssr: true, robots: false }, '/airports/**': { prerender: true }, '/services/**': { prerender: true } },
  sitemap: { exclude: ['/book', '/booking-confirmation/**'] },
  robots: { disallow: ['/book', '/booking-confirmation/'] },
  image: { format: ['webp', 'avif'], quality: 82 },
  devtools: { enabled: false },
  vite: {
    server: {
      allowedHosts: ['lhr-nuxt.onrender.com/'],
    },
  },
})
