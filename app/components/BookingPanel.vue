<script setup lang="ts">
import { CalendarDays, ArrowUpRight, ShieldCheck } from 'lucide-vue-next'
import { airports } from '~/data/site'
const mode=ref('arrival'); const airport=ref('heathrow'); const date=ref('');const passengers=ref('1');const flight=ref('')
const router=useRouter()
function submit(){ router.push({path:'/book',query:{airport:airport.value,service:mode.value,date:date.value,passengers:passengers.value,flight:flight.value}}) }
</script>
<template><form class="booking-panel" @submit.prevent="submit" aria-label="Airport assistance enquiry"><div class="booking-top"><div><span class="eyebrow gold-text">YOUR JOURNEY, ELEVATED</span><h2>Book your <em>airport assistance.</em></h2></div><div class="booking-safe"><ShieldCheck :size="17"/> Personalised enquiry</div></div>
 <div class="tabs" role="group" aria-label="Journey type"><button v-for="m in [{value:'arrival',label:'Arrival'},{value:'departure',label:'Departure'},{value:'transit',label:'Transit'}]" :key="m.value" type="button" :class="{active:mode===m.value}" :aria-pressed="mode===m.value" @click="mode=m.value">{{m.label}}</button></div>
 <div class="form-fields"><label class="field field-full">Select airport<select v-model="airport" required><option v-for="a in airports" :key="a.code" :value="a.slug">{{a.name}} ({{a.code}})</option></select></label>
 <label class="field">Travel date<input v-model="date" type="date" required :min="new Date().toISOString().slice(0,10)"/></label><label class="field">Passengers<select v-model="passengers"><option v-for="n in 9" :key="n" :value="String(n)">{{n}} {{n===1?'Passenger':'Passengers'}}</option></select></label>
 <label class="field field-full">Flight number <span class="optional">(optional)</span><input v-model.trim="flight" placeholder="e.g. BA256" maxlength="15"/></label></div>
 <button class="btn btn-red submit-book" type="submit">Check availability <ArrowUpRight :size="18"/></button>
 <p class="booking-foot"><CalendarDays :size="15"/> No payment required for an enquiry · Availability confirmed by the team</p>
 </form></template>
