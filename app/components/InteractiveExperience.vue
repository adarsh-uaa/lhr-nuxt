<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
const cursor = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
const progress = ref<HTMLElement | null>(null)
const canUse = ref(false)
let observer: IntersectionObserver | undefined
let raf = 0
let moveRaf = 0
let pointerX = -100, pointerY = -100, ringX = -100, ringY = -100
let currentTarget: Element | null = null
const route = useRoute()
function onPointer(e: PointerEvent) {
  if(e.pointerType !== 'mouse') return
  pointerX=e.clientX; pointerY=e.clientY
  if(cursor.value) cursor.value.style.transform=`translate3d(${pointerX}px,${pointerY}px,0)`
  if(!moveRaf) moveRaf=requestAnimationFrame(()=>{moveRaf=0; const target=(e.target as Element)?.closest?.('a,button,select,input,textarea,[data-cursor]'); if(target!==currentTarget){ currentTarget=target; document.documentElement.classList.toggle('cursor-hover',!!target) }})
}
function animateRing(){
  ringX += (pointerX-ringX)*.17; ringY += (pointerY-ringY)*.17
  if(ring.value) ring.value.style.transform=`translate3d(${ringX}px,${ringY}px,0)`
  raf=requestAnimationFrame(animateRing)
}
function onScroll(){
  if(!progress.value)return
  const max=document.documentElement.scrollHeight-innerHeight
  progress.value.style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`
}
function observeSections(){
  observer?.disconnect()
  document.querySelectorAll('.reveal-on-scroll').forEach((el)=>{
    if(el.getBoundingClientRect().top<innerHeight*.95){ el.classList.add('is-visible') }
    else observer?.observe(el)
  })
}
onMounted(async()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)').matches
  canUse.value=fine && !reduce
  await nextTick()
  if(canUse.value){ document.addEventListener('pointermove',onPointer,{passive:true}); raf=requestAnimationFrame(animateRing) }
  if(!reduce){
    observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer?.unobserve(entry.target)}})
    },{threshold:.12,rootMargin:'0px 0px -25px 0px'})
    observeSections()
  }else document.querySelectorAll('.reveal-on-scroll').forEach(el=>el.classList.add('is-visible'))
  window.addEventListener('scroll',onScroll,{passive:true});onScroll()
})
watch(()=>route.fullPath,()=>nextTick(()=>{observeSections();onScroll()}))
onBeforeUnmount(()=>{
  document.removeEventListener('pointermove',onPointer)
  window.removeEventListener('scroll',onScroll)
  observer?.disconnect(); cancelAnimationFrame(raf);cancelAnimationFrame(moveRaf)
  document.documentElement.classList.remove('cursor-hover')
})
</script>
<template>
  <div ref="progress" class="reading-progress" aria-hidden="true" />
  <template v-if="canUse">
    <div ref="cursor" class="lux-cursor-dot" aria-hidden="true" />
    <div ref="ring" class="lux-cursor-ring" aria-hidden="true" />
  </template>
</template>
