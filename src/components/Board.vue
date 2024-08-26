<script lang="ts" setup>

  // import hooks m.m. from vue
  import { ref, computed } from 'vue';

  // import card component so we can use it as childcomponent
  import Card from './Card.vue';  // Import card component

  // ref tracks changes and makes the component rerender when changes are made
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

  const newTaskTitle = ref<string>('');
  const newTaskDesc = ref<string>('');
  const isActive = ref<string>(false); // Track the modals active state

  // Add task method
  const addTask = () => {
    if (newTaskTitle.value && newTaskDesc.value) {
      // Adds to the first column "To Do"
      tasks.value[0].tasks.push({
        title: newTaskTitle.value,
        desc: newTaskDesc.value
      });

      // making input fields empty after submitting
      newTaskTitle.value = '';
      newTaskDesc.value = '';
      isActive.value = false; // Close the modal when submitting
    } else {
      alert('Please enter both title and description.');
    }
  };

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
            <v-text-field 
              v-model="newTaskTitle"
              label="Enter headline" 
              variant="outlined" 
            />
            <v-text-field 
              v-model="newTaskDesc"
              label="Enter description" 
              variant="outlined" 
            />
          </v-card-text>

          <v-card-actions>
            <v-btn
              text="Close"
              @click="isActive.value = false"
            ></v-btn>
            <v-btn
              text="Create"
              @click="addTask"
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