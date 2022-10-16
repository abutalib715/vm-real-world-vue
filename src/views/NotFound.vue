<template>
  <h1>Opps!</h1>
  <h3>The {{ resource }} you are looking is not here</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    resource: {
      required: true,
      type: String,
      default: 'page'
    }
  }
}
</script>

<style scoped>

</style>