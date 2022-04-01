<template>
<div>
    <NuxtLink
    :to="`/products/${card.id}`"
    class="ml-5 d-flex"
  >
    <img
      :src="require(`@/assets/images/${card.image || 'fe1.jpg '}`)"
      alt="fe"
      class="image"
    />

     </NuxtLink>
    
  <div class="card white ml-5">
    <h3 class="black--text ml-2">{{ card.title }}</h3>
     <p class="black--text ml-2">{{ card.snippet }}</p>
  </div>
 
    
</div>
  

</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>



</style>
