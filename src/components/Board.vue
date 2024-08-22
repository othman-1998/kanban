<script lang="ts" setup>

  // import hooks m.m. fra vue
  import { ref, computed } from 'vue';

  // importer card component så vi kan bruge den her
  import Card from './Card.vue';  // Import card component

  // ref tracker ændringer og sikrer rerendering af komponent i tilfælde af ændring af værdierne
  const tasks = ref([
    {
      title: "To Do",
      tasks: [
        { title: "task 1", desc: "description for task 1" },
        { title: "task 2", desc: "description for task 2" },
        { title: "task 3", desc: "description for task 3" }
      ]
    },
    {
      title: "In Progress",
      tasks: [
        { title: "Task 4", desc: "Description for Task 4" },
        { title: "Task 5", desc: "Description for Task 5" }
      ]
    },
    {
      title: "Done",
      tasks: [
        { title: "Task 6", desc: "Description for Task 6" }
      ]
    }
  ]);

</script>

<template>
  <v-container>

    <v-dialog max-width="500">

      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="+"
          variant="flat"
          style="margin-bottom: 15px"
        />
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Create a new to do">
          <v-card-text>
          <v-text-field label="Enter headline" variant="outlined" />
          <v-text-field label="Enter description" variant="outlined" />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text="Close"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>

    </v-dialog>

    <v-row>
      <v-col
        v-for="(task, index) in tasks"
        :key="index"
      >
        <Card
          :title="task.title"
          :tasks="task.tasks"
          :group="'tasks'"
        />
      </v-col>
    </v-row>

    <!-- Overlay -->
    <v-overlay :value="isDialogActive" color="rgba(0, 0, 0, 0.9)">
    </v-overlay>

  </v-container>
</template>