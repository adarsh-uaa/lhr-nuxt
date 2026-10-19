<script setup lang="ts">import {faqs} from '~/data/site';import {Plus} from 'lucide-vue-next'</script>
<template><div class="faq-list"><details v-for="(faq,i) in faqs" :key="faq.q" :open="i===0"><summary>{{faq.q}}<Plus :size="18"/></summary><p>{{faq.a}}</p></details></div></template>
