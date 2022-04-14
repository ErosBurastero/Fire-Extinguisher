<template>
  <v-app>
    <v-main class="white">
      <Nav />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
     head: {
        titleTemplate: 'Fire Extinguisher',
        title: 'Fire Extinguisher',
        bodyAttrs: {
          class: "body",
          },
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Fire extinguisher page by Eros Burastero' },
            { name: 'format-detection', content: 'telephone=no' },

        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/fire.png' },
             {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ],

       
    },

};
</script>
