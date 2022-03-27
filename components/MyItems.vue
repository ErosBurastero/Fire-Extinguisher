<template>
  <div class="d-flex justify-center my-5">
    <img :src="require(`@/assets/images/${item.image}`)" class="image" alt="" />
    <div class="ml-2">
      <div class="display-1 my-3">
        {{ item.title }}
      </div>

      <div class="title my-5">
        {{ item.snippet }}
      </div>
      <div class="subtitle-2 my-5">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
