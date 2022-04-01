<template>
  <div>
      <div v-if="!$fetchState.pending"> 
          <RevReviewersCard 
          class="my-16"
          v-for="reviewer in reviewers.results"
          :key="reviewer.login.uuid"
          :review="reviewer"/>
      </div>

      <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            reviewers: []
        }
    },

    async fetch() {
        this.reviewers = await fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
    }

}
</script>

<style>

</style>