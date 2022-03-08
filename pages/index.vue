<template>
  <div justify="center" align="center">
    <v-card max-height="500" max-width="500" class="pa-5">
      <div class="ml-16">

        <input  class="white  my-2" v-model="task" type="text" />
        <button @click="addTask" class="white black--text" >add a task</button>
        
      </div>

      <div v-for="(task, index) in $store.state.tasks" :key="index">
        <ul>
          <li>
              {{ task }} 
          </li>
        </ul>
        
         </div>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      task: []
    };
  },

  methods: {
    addTask() {
      this.$store.state.tasks = this.task
      this.$store.dispatch('addTask')
      this.task = ''
      
    }

 
  },

  

  
  
  
};
</script>
