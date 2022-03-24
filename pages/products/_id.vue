<template>
<div>
    <div class="black--text d-flex justify-center">
      <img :src="require(`@/assets/images/${product.image}`)" alt="" class="product-image">
      <div class="box ml-10 ">
        <h1 class="display-1 "> {{ product.title }}</h1>    
        <v-divider class="black"></v-divider>
        <div> {{ product.snippet}} </div>
       
     
      </div>
   
      
    
  </div>
   <div class="whats-included-container d-flex justify-center my-10 black--text">
            <div class="included-container">
                <h6>Super Effective</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
            </div>
            <div class="included-container">
                <h6>Clean & Tidy</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
            </div>
            <div class="included-container">
                <h6>Cancel Anytime</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
            </div>
            <div class="included-container">
                <h6>Satisfaction Guaranteed</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem.</p>
            </div>        
        </div>
        <v-divider class="black"></v-divider>
        <div class="description-container black--text  my-10">
            <p>
                {{ product.description }}
            </p>
        </div>
</div>
  
</template>

<script>
export default {
    computed: {
        product() {
            return this.$store.getters.getProductById(this.$route.params.id)
        }
    }
}
</script>

<style>

.product-image{
    width: 500px;
    height: 500px;
    border: solid black 1px;
}

.box{
    width: 600px;
    height: 300px;
    background: rgb(241, 235, 235);
}

</style>