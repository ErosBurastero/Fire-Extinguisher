<template>
  <NuxtLink :to="`/products/${card.id}`" class="cards my-10 ml-2">
    <img
      :src="require(`@/assets/images/${card.image || fe1.jpg}`)"
      alt="fe"
      class="images"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
.cards {
  width: 250px;
  height: 250px;
}

.images {
  width: 250px;
  height: 250px;
  border: solid 1px black;
}
</style>
