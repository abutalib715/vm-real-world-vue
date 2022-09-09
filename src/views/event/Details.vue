<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
    import EventService from '@/services/EventService.js'

    defineProps(['event'])
</script>

<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>