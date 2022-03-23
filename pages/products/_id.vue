<template>
  <div class="black--text">
      
      {{ product.title }}
    
  </div>
</template>

<script>
export default {
    computed: {
        product() {
            return this.$store.getters.getProductById(this.$route.params.id)
        }
    }
}
</script>

<style>

</style>