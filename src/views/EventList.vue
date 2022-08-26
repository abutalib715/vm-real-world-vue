<script setup>
  import EventCard from "@/components/EventCard.vue";
  
  const events = [
    {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline',
          location: 'Meow Toen',
          date: 'January 28 2023',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
      },{
          id: 5928101,
          category: 'Laravel',
          title: 'Laracon Asia',
          description: 'lorem text for test',
          location: 'Mumbai',
          date: 'December 28 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Unacademy'
      },{
          id: 5928101,
          category: 'Wordpress',
          title: 'WordCamp-2022',
          description: 'Find your new feline',
          location: 'Dhaka',
          date: 'December 20 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'W3Devs'
      }
  ]
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
