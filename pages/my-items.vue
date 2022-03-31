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
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

<style></style>
