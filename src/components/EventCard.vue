<script setup>
    import { RouterLink } from "vue-router";

    defineProps({
        event: Object
    })
</script>
<template>

    <RouterLink class="event-color" :to="{ name: 'EventDetails', params:{ id:event.id } }">
    <div class="event-card">
        <!-- Display Event Data -->
        <span>@ {{ event.time }} on  {{ event.date }}</span>
        <h4>{{ event.title }}</h4>
    </div>
    </RouterLink>
</template>
<style scoped>
    .event-card {
        padding: 20px;
        width: 250px;
        cursor: pointer;
        border: 1px solid #39435c;
        margin-bottom: 18px;
    }
    .event-card:hover{
        transform: scale(1.01);
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    }
    .event-color{
        color: #2c3e50;
        text-decoration: none;
    }
</style>