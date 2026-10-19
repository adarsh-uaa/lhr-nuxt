# UK Airport Assistance — Nuxt 4 luxury website

Responsive Nuxt site inspired by the approved full-page visual concept. Includes SEO-friendly airport and service pages, booking-first hero, FAQ and a demonstration enquiry workflow.

## Requirements
Node.js >= 22.22.3 (Nuxt SEO v6 requirement), npm.

## Run
```bash
cp .env.example .env
npm install
npm run dev
```
Visit http://localhost:3000.

## Deploy
Set `NUXT_PUBLIC_SITE_URL` to your **real canonical domain**, then:
```bash
npm run build
npm run preview
```
Deploy the Nuxt server output to a Node-supporting platform. `npm run generate` creates a static build but the supplied configuration retains SSR capability for the booking page; use a supported server deployment unless adapting the route rules.

## IMPORTANT before public launch
1. Replace all Unsplash demonstration image URLs with properly licensed, airport-accurate photography. The images illustrate the style and are not certified photographs of the named airports.
2. Replace the placeholder brand with your verified business identity and provide privacy policy, terms, GDPR disclosures, refunds and cancellation policies.
3. Add genuine testimonials only. No unverified customer counts, official airport partnerships or fabricated instant confirmations are shown.
4. Configure `NUXT_PUBLIC_SITE_URL`. Nuxt SEO supplies sitemap, robots and structured data capabilities. Inspect `sitemap.xml`, canonical URLs and page source after deploying.
5. The inquiry flow currently uses `mailto:` **only if** `NUXT_PUBLIC_BOOKING_EMAIL` is configured. Without that setting it displays a configuration notice. It does not create reservations, charge customers or verify availability. Integrate the supplier API server-side with idempotency keys, a persistent unique booking ID, retry strategy and payment verification before commercial launch.
6. Fast Track immigration, security and VIP airside access are regulated. Verify exact airport/terminal availability before claiming these services.
7. Replace font dependency on Google Fonts with self-hosted licensed versions for best performance/privacy if desired.
8. Implement analytics, consent mode as appropriate, accessibility audit, uptime and monitoring, and test PageSpeed/Lighthouse on real deployed pages.

## SEO
- Fully renderable route pages (not a client-only SPA).
- Page-specific titles, descriptions, OG metadata, canonical links and service structured data.
- Homepage and FAQs include structured FAQ content (rich display by Google not guaranteed).
- Sitemap, robots, and indexability via `@nuxtjs/seo`.
- Booking page `noindex`.
- No misleading FAQ/ratings or fake business reviews.
- Airports/services are seeded from `app/data/site.ts` for easy editing and CMS integration later.

## Design fidelity
This is an original functional implementation of the **approved visual direction**, not a pixel-perfect source reconstruction from a flattened mockup. Illustrative imagery, exact type rendering and dimensions may differ; final art direction requires approved production photo assets.


## Dependency fix (17 October 2026)

The original `@nuxtjs/seo` range `^6.0.18` was invalid. This project pins `@nuxtjs/seo` to `6.0.1`. If you already extracted the earlier archive, replace `package.json`, remove any partial `node_modules` and `package-lock.json`, then run `npm install`.

## SEO and interaction upgrade (17 October 2026)
- Homepage title shortened to `UK VIP Airport Assistance | Meet & Greet`; no duplicated brand suffix.
- Development on `localhost` deliberately returns noindex; never assess production indexability on localhost.
- Configure `NUXT_PUBLIC_SITE_URL=https://your-real-domain.example` in `.env` before a public deployment. The canonical on production uses that domain.
- Mouse-only custom cursor, scroll progress indicator, refined hover/field interactions, hero entrance and on-scroll reveals. All effects respect reduced-motion settings.
- On localhost, use browser View Source to inspect canonical/metadata; test production indexability only on the public HTTPS URL.
