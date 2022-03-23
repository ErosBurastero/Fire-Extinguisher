<template>
  <v-card >
    <v-tabs  >
      <NuxtLink class="menu pa-3 " to="/">Fire Extinguisher</NuxtLink>

      <NuxtLink to="/products">products</NuxtLink>
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
}
</style>