<template>
  <div >

    <div class="black--text d-flex justify-center flex-wrap">
      <img
        :src="require(`@/assets/images/${product.image}`)"
        alt=""
        class="product-image"
      />
      
   
       <div class="box ml-2 my-5 ">

        <h1 class="display-1">{{ product.title }}</h1>
        <v-divider class="black"></v-divider>
        <div>{{ product.snippet }}</div>
        <RentModal :product="product" class="my-10" />
      </div>
    
     
    </div>
    <div
      class="d-flex flex-wrap justify-center my-10 black--text"
    >
      <div>
        <h6>Super Effective</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div >
        <h6>Clean & Tidy</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div>
        <h6>Cancel Anytime</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div>
        <h6>Satisfaction Guaranteed</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
    </div>
    <v-divider class="black"></v-divider>
    <div class="description-container black--text my-10">
      <p>
        {{ product.description }}
      </p>
      <v-divider class="black"></v-divider>
      <Reviewers  />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
</script>

<style>
.product-image {
  width: 500px;
  height: 500px;
  border: solid black 1px;
  min-width: 350px;
  min-height: 350px;
}

.box {
  width: 600px;
  height: 300px;
  background: rgb(241, 235, 235);
}

p{
  margin-left: 30px;
}

h6{
  margin-left: 30px;
}
</style>
