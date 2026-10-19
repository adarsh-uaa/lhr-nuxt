<script setup lang="ts">
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
const open=ref(false)
const links=[{to:'/airports',label:'Airports'},{to:'/services',label:'Services'},{to:'/#experience',label:'VIP Experience'},{to:'/about',label:'About'},{to:'/faq',label:'FAQ'},{to:'/contact',label:'Contact'}]
</script>
<template>
<header class="site-header"><div class="shell nav-inner">
 <NuxtLink to="/" class="brand" aria-label="UK Airport Assistance home"><span class="brand-mark">✧</span><span><strong>UK AIRPORT</strong><small>ASSISTANCE</small></span></NuxtLink>
 <nav class="desktop-nav" aria-label="Main navigation"><NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{l.label}}</NuxtLink></nav>
 <div class="nav-right"><span class="nav-note">PRIVATE AIRPORT CONCIERGE</span><NuxtLink to="/book" class="btn btn-gold nav-cta">Book now <ArrowUpRight :size="16"/></NuxtLink><button class="mobile-toggle" @click="open=!open" :aria-expanded="open" aria-label="Toggle menu"><X v-if="open"/><Menu v-else/></button></div>
 </div><nav v-if="open" class="mobile-nav" aria-label="Mobile navigation"><NuxtLink v-for="l in links" :key="l.to" :to="l.to" @click="open=false">{{l.label}}</NuxtLink><NuxtLink to="/book" @click="open=false">Book airport assistance →</NuxtLink></nav>
</header>
</template>
