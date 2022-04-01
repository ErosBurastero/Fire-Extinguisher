<template>
  <div class="my-16" >
      <h4 class="display-1 my-5 d-flex justify-center"> {{ cardsSection.title }}</h4>
      <p  class="subtitle d-flex justify-center"> {{ cardsSection.snippet }} </p>
      <div class="white d-flex justify-center flex-wrap">
          <CardsLargeCard v-for="card in cardsSection.cards"
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