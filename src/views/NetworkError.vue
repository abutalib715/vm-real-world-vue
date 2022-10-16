<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>It looks like you are experiencing some network issues, please take a and
      <a href="#" @click="$router.go(-1)">click here</a> to try again
    </h3>
  </div>
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