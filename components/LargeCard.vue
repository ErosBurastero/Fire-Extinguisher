<template>
<div>
    <NuxtLink
    :to="`/products/${card.id}`"
    class="ml-10 d-flex"
  >
    <img
      :src="require(`@/assets/images/${card.image || 'fe1.jpg '}`)"
      alt="fe"
      class="image"
    />

     </NuxtLink>
    
  <div  class="card white ml-10">
         <h3 class="black--text">{{ card.title }}</h3>
     <p class="black--text">{{ card.snippet }}</p>
  </div>
 
    
</div>
  
 
   
 
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
.image {
  width: 300px;
  height: 300px;
  border: solid 1px black;
  border-radius: 10%;
}

.image:hover {
  animation-name: rotate;
  animation-duration: 1.5s;
  animation-delay: 0.2s;
}

.card {
  width: 300px;
  height: 300px;
  text-decoration: none;
}

@keyframes rotate {
  0% {
    transform: rotateY(360deg);
  }
}
</style>
