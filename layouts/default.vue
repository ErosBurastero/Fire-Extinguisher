<template>
  <v-app >
    <div class="d-flex justify-center my-5">
         <NuxtLogo />

    </div>
    <index />
    
     
      
     
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
   
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {

    return {
    
    }
  }
}
</script>


