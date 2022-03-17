<template>
  <v-app >
   
    <v-main class="white">
      <v-container>
        <Hero />
        <LargeCardDisplay v-for="cardInfo in largeCardInfo"
        :key="cardInfo"
        :cardsSection="cardInfo" />
        <Nuxt />
      </v-container>
    </v-main>
    
   
  </v-app>
</template>

<script>
import { largeCardSections } from "@/assets/data.js"
export default {
  name: 'DefaultLayout',
  data () {

    return {
      largeCardInfo: largeCardSections
    }
  },

  
}
</script>


