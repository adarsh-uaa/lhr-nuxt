<script setup lang="ts">
const props=defineProps<{title:string,description:string,path:string,image?:string, noindex?:boolean}>()
const config=useRuntimeConfig()
const canonical=computed(()=>`${config.public.siteUrl.replace(/\/$/,'')}${props.path}`)
useSeoMeta({title:()=>props.title,description:()=>props.description,ogTitle:()=>props.title,ogDescription:()=>props.description,ogType:'website',ogUrl:()=>canonical.value,ogImage:()=>props.image || `${config.public.siteUrl.replace(/\/$/,'')}/og-cover.svg`,twitterCard:'summary_large_image',robots:()=>props.noindex || import.meta.dev || config.public.siteUrl.includes('example.com') ? 'noindex,nofollow' : 'index,follow'})
useHead({titleTemplate: (title) => title || 'UK Airport Assistance', link:[{rel:'canonical',href:canonical}]})
</script><template></template>
