<script setup lang="ts">
// Website text and metadata render on the server; cursor/scroll visuals are client-only enhancements.
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <ClientOnly><InteractiveExperience /></ClientOnly>
</template>
