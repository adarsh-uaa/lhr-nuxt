<script setup lang="ts">import { airports, services } from '~/data/site'</script>
<template><footer class="footer"><div class="shell footer-main">
<div class="footer-intro"><NuxtLink class="brand" to="/"><span class="brand-mark">✧</span><span><strong>UK AIRPORT</strong><small>ASSISTANCE</small></span></NuxtLink><p>Premium airport meet and greet enquiries across the United Kingdom. A more considered way to travel.</p><p class="foot-legal">Independent travel assistance brand. Not affiliated with UK airport authorities.</p></div>
<div><h3>Explore</h3><NuxtLink to="/">Home</NuxtLink><NuxtLink to="/airports">Our Airports</NuxtLink><NuxtLink to="/services">Services</NuxtLink><NuxtLink to="/about">About Us</NuxtLink><NuxtLink to="/faq">FAQs</NuxtLink></div>
<div><h3>VIP Services</h3><NuxtLink v-for="service in services.slice(0,5)" :key="service.slug" :to="`/services/${service.slug}`">{{service.name}}</NuxtLink></div>
<div><h3>Popular Airports</h3><NuxtLink v-for="airport in airports.slice(0,5)" :key="airport.slug" :to="`/airports/${airport.slug}`">{{airport.name}} ({{airport.code}})</NuxtLink></div>
<div><h3>Let's arrange your journey</h3><p>Tell us where and when you're travelling. We’ll help you request the right service.</p><NuxtLink to="/book" class="btn btn-gold">Enquire now ↗</NuxtLink></div>
</div><div class="shell footer-bottom"><span>© {{new Date().getFullYear()}} UK Airport Assistance. Concept website.</span><span>Privacy and booking terms must be added before launch.</span></div></footer></template>
