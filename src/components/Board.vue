<script lang="ts">

  // import hooks m.m. fra vue
  import { defineComponent, ref, computed } from 'vue';

  // importer card component så vi kan bruge den her
  import Card from './Card.vue';  // Import card component

  export default defineComponent({

    // navn på komponent
    name: 'Board',

    // child components tilføjes her
    components: {
      Card,
    },

    setup() {

      // vores objekter
      // ref tracker ændringer og sikrer rerendering af komponent i tilfælde af ændring af værdierne
      const tasks = ref({
        todo: [
          { title: 'task 1', desc: 'description for task 1' },
          { title: 'task 2', desc: 'description for task 2' },
          { title: 'task 3', desc: 'description for task 3' },
        ],
        inProgress: [
          { title: 'Task 4', desc: 'Description for Task 4' },
          { title: 'Task 5', desc: 'Description for Task 5' },
        ],
        done: [
          { title: 'Task 6', desc: 'Description for Task 6' },
        ],
      });

      // computed sikrer automatisk opdateringer og cacher simpelthen værdien
      const todoTasks = computed(() => tasks.value.todo);
      const inProgressTasks = computed(() => tasks.value.inProgress);
      const doneTasks = computed(() => tasks.value.done);

      return {
        todoTasks,
        inProgressTasks,
        doneTasks,
      };

    }

  });

</script>

<template>
  <v-container>
  
    <p class="bg-white rounded text-center mb-4 text-h4 cursor-pointer d-sm-inline-block pr-2 pl-2"> 
      + 
    </p>

    <v-row>

      <!-- To Do -->
      <v-col>
      <!-- sender de forventede props ned til card component -->
        <Card
          title="To Do"
          :tasks="todoTasks"
          :group="'tasks'"
        />
      </v-col>

      <!-- In Progress -->
      <v-col>
        <Card
          title="In Progress"
          :tasks="inProgressTasks"
          :group="'tasks'"
        />
      </v-col>

      <!-- Done -->
      <v-col>
        <Card
          title="Done"
          :tasks="doneTasks"
          :group="'tasks'"
        />
      </v-col>

    </v-row>

  </v-container>
</template>

<style>

</style>
