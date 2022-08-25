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
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline',
          location: 'Meow Toen',
          date: 'January 28 2023',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
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
