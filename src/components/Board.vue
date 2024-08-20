<script lang="ts">

  // importerer card component så vi kan brug den i vores template
  import Card from './Card.vue';

  // export component så vi kan import den i andre filer
  export default {
    // navn på komponent
    name: 'Board',
    // child komponenter tilføjes her
    components: {
      Card
    },
    // data / komponent-states her
    data() {
      return {
        tasks: {
          todo: [
            { title: "task 1", desc: "description for task 1" },
            { title: "task 2", desc: "description for task 2" },
            { title: "task 3", desc: "description for task 3" }
          ],
          inProgress: [
            { title: "Task 4", desc: "Description for Task 4" },
            { title: "Task 5", desc: "Description for Task 5" }
          ],
          done: [
            { title: "Task 6", desc: "Description for Task 6" }
          ],
        }
      };
    },
    // funktioner her
    methods: {
    },
  };
  
</script>

<template>
  <v-container>

    <v-row>

      <!-- to do -->
      <v-col>
        <!-- sender de forventede props ned til card component -->
        <Card
          title="To Do"
          :tasks="tasks.todo"
          :group="'tasks'"
        />
      </v-col>

      <!-- in progress -->
      <v-col>
        <Card
          title="In Progress"
          :tasks="tasks.inProgress"
          :group="'tasks'"
        />
      </v-col>

      <!-- done -->
      <v-col>
        <Card
          title="Done"
          :tasks="tasks.done"
          :group="'tasks'"
        />
      </v-col>

    </v-row>

  </v-container>
</template>

<style>

</style>