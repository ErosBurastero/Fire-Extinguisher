<template>
  <v-card >
    <v-tabs  >
      <NuxtLink class="menu" to="/">Fire Extinguisher</NuxtLink>

    
    
      <NuxtLink class="menu" to="/products">Products</NuxtLink>

     

   
    

    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {

    }
  },
};
</script>

<style lang="scss">

.menu{
  text-decoration: none;
  color: $white !important; 
  padding: 10px;
}
</style>