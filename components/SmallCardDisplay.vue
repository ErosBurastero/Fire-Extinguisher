<template>
  <div class="" >
      <h3 class="black--text d-flex justify-center display-1 my-5">
        {{ cardsSection.title }}
      </h3>

      <div class="d-flex justify-center flex-wrap pa-10">
          <SmallCard v-for="card in cardsSection.cards"
           :key="card.id"
           :card="card" />
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