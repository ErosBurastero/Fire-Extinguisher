<template>
  <div>
    <CardsLargeCardDisplay
      v-for="cardInfo in largeCardInfo.slice(0, 1)"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />

    <CardsSmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
     head: {
        titleTemplate: '%s - Products',
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
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections,
    };
  },
};
</script>
