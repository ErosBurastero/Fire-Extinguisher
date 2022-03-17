<template>
  <div class="container">
      <h4 class="black--text"> {{ cardsSection.title }}</h4>
      <p  class="black--text"> {{ cardsSection.snippet }} </p>
      <v-card>
          <LargeCard v-for="card in cardsSection.cards"
          :key="card.id"
          :card="card" />
      </v-card>
  </div>
    
    
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: ['cardsSection']

}
</script>

<style>

</style>