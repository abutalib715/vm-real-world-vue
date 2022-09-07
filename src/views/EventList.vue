<script>
  import EventService from '@/services/EventService.js'
  import EventCard from "@/components/EventCard.vue";
  import { watchEffect } from 'vue';

  export default {
    props: ["page"],
    components: { EventCard },
    data() {
        return {
            events: [],
            totalEvents: 0
        };
    },
    created() {
      watchEffect(() => {
        // this.events = null
        EventService.getEvents(2, this.page).then(response => {
            this.events = response.data;
            this.totalEvents = response.headers['x-total-count']
        }).catch(error => {
            console.log(error);
        });
      })
    },
    computed: {
      hasNextPage(){
        var totalPages = Math.ceil(this.totalEvents/2) 
        return this.page < totalPages 
      }
    }
}

</script>

<template>
  <main>
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink :to="{ name: 'EventList', query: { page: page - 1 } }" 
        rel="rel" v-if="page != 1" id="page-prev">&#60; Previous </RouterLink>
        
      <RouterLink :to="{ name: 'EventList', query: { page: page + 1 } }" 
        rel="rel" v-if="hasNextPage" id="page-next">Next &#62;  </RouterLink>
    </div>
  </main>
</template>
<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination{
    display: flex;
    width: 290px;
  }
  .pagination a{
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }
  #page-prev{
    text-align: left;
  }
  #page-next{
    text-align: right;
  }
</style>
