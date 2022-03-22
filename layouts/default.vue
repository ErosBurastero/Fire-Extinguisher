<template>
  <v-app  >
   
    <v-main class="white">
      <div>
        <Nav />
         <v-container>
        
        <Hero />

        <LargeCardDisplay v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cardsSection="cardInfo" />
        
        <SmallCardDisplay v-for="cardInfo in smallCardSections"
         :key="cardInfo.id"
         :cardsSection="cardInfo" />

        <Nuxt />
      </v-container>
      </div>
     
    </v-main>
    
   
  </v-app>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js"
export default {
  name: 'DefaultLayout',
  data () {

    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    }
  },

  
}
</script>


