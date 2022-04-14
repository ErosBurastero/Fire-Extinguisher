<template>
  <div>
    <div class=" black--text">
      <MyItems v-for="item in myRentals" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   head: {
        titleTemplate: '%s - My Items',
        title: 'Fire Extinguisher',
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
            { rel: 'icon', type: 'image/x-icon', href: '/fire.ico' }
        ]
    },
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

