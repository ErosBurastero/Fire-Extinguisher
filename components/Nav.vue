<template>
  <v-card class="d-flex">
    <div>
       <v-tabs>
      <NuxtLink class="menu" to="/">Fire Extinguisher</NuxtLink>
       <div class="d-flex justify-end">
            <NuxtLink class="menu" to="/products">Products</NuxtLink>
            <NuxtLink class="menu" to="/my-items">My Items</NuxtLink>
      </div>
         </v-tabs>
     
    </div>
   
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