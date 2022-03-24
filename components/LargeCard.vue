<template>
  <NuxtLink :to="`/products/${card.id}`"  class="card white black--text ml-10 ">
      <img :src="require(`@/assets/images/${card.image || 'fe1.jpg '}`)" alt="fe" class="image" >
      
         <h3> {{ card.title }} </h3>
         <p> {{ card.snippet }} </p>
      
     
  </NuxtLink>
</template>

<script>
export default {
    props: ['card']

}
</script>

<style>

.image{ 
  width: 300px;
  height: 300px;
  border: solid 1px black;
  border-radius: 10%;
  
}

.image:hover{
  animation-name: rotate;
  animation-duration: 10s;
  
}

.card{
  width: 300px;
  height: 500px;
}

@keyframes rotate{
  0% {
    transform: rotateY(360deg);
  }
}





</style>