<template>
  <div class="d-flex flex-wrap justify-center">
    <div class="my-8">
      <h1 class="display-4 black--text">
        FIND YOUR<br />
        FIRE<br />
        EXTINGUISHER
      </h1>
      <p class="snippet black--text">
        Lorem ipsum dolor sit amet consectetur um laboriosam<br />
        , perspiciatis deserunt asphendeum atque voluptatem <br />
        omnis molestias cumque adipisci.
      </p>
      <NuxtLink to="/products" class="boton">
        <v-btn color="error" large> START LOOKING </v-btn>
      </NuxtLink>
    </div>

    <img
      src="~assets/svg/fire-extinguisher.svg"
      alt="fire extinguisher"
      class="foto ml-2"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  },
};
</script>

<style>
.foto {
  animation-name: move;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.boton {
  text-decoration: none;
}

@keyframes move {
  0% {
    transform: translateY(5%);
  }
}
</style>
