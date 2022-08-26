<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
    import EventService from '@/services/EventService.js'

    const route = useRoute()

    const event = ref(null)
    EventService.getEvent(route.params.id).then(response => {
        event.value = response.data
    }).catch(error => {
        console.log(error)
    })
</script>

<template>
<div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</div>
</template>