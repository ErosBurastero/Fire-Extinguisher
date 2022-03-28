<template>
  <div class="my-16" >
      <h4 class="black--text display-1 d-flex justify-center"> {{ cardsSection.title }}</h4>
      <p  class="black--text subtitle d-flex justify-center"> {{ cardsSection.snippet }} </p>
      <div class="white d-flex justify-center flex-wrap">
          <LargeCard v-for="card in cardsSection.cards"
          :key="card.id"
          :card="card"
           />
      </div>
  </div>
    
    
</template>

<script>
export default {

    props: ['cardsSection']

}
</script>

<style>

</style>