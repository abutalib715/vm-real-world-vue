<script setup>
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import EventService from '@/services/EventService.js'

    const route = useRoute()
    const router = useRouter()

    const event = ref(null)
    const id = route.params.id
    EventService.getEvent(route.params.id).then(response => {
        event.value = response.data
    }).catch(error => {
      if(error.response && error.response.status == "404"){
        router.push({
          name: "404Resource",
          params: { resource: 'event' }
        });
      } else {
        router.push({ name: "NetworkError" });
      }
        console.log(error)
    })
</script>

<template>
<div v-if="event">
    <h1>{{ event.title }}</h1>

    <div id="nav">
        <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink>
        <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
        <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event"></RouterView>
</div>
</template>

<style scoped>
    a{
        padding: 10px;
    }
</style>