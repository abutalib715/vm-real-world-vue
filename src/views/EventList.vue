<script setup>
  import { ref } from 'vue'
  import EventCard from "@/components/EventCard.vue"
  import EventService from '@/services/EventService.js'

  const events = ref(null);
  EventService.getEvents().then(response => {
      events.value = response.data
  }).catch(error => {
      console.log(error);
  });
</script>

<template>
  <main>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>
<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
