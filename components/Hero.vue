<template>
  <div class="d-flex flex-wrap my-2 justify-center">
    <div class="my-8">
      <h1 class="black--text display-2" data-cy="title">
        FIND YOUR<br />
        FIRE<br />
        EXTINGUISHER
      </h1>
      <p class="black--text ml-2" data-cy="description">
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
      class="foto"
      width="350px"
      height="350px"
    />
  </div>
</template>
