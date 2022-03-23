<template>
  <div>
      <LargeCardDisplay v-for="cardInfo in largeCardInfo.slice(0,1)" 
      :key="cardInfo.id" 
      :cardsSection="cardInfo" />

  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
    data() {
        return {
            largeCardInfo: largeCardSections,
            smallCardSections
        }
    }

}
</script>

<style>

</style>