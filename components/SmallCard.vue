<template>
  <NuxtLink :to="`/products/${card.id}`" class="cards  ml-5 ">
      <img  :src="require(`@/assets/images/${card.image || fe1.jpg }`)" alt="fe" class="images">

  </NuxtLink>
</template>

<script>
export default {

    props: ['card']

}
</script>

<style>

.cards{
    width: 350px;
    height: 400px;
}

.images{
    width: 250px;
    height: 250px;
    border: solid 1px black;
}

</style>