<script lang="ts" setup>

  import { ref, type Ref } from 'vue';
  import Card from './Card.vue'; 
  import Addtask from './Addtask.vue';

  interface Task {
    title: string;
    desc: string;
  }

  interface Column {
    title: string;
    tasks: Task[];
  }

  const tasks: Ref<Column[]> = ref([
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

  const isActive = ref<boolean>(false); // Tracker modalens aktiv state

  // Handle adding a task
  const handleAddTask = (newTask: { title: string; desc: string }) => {
    tasks.value[0].tasks.push(newTask); // tilføjer til første column, dvs. til to do 
  };

  const handleCloseModal = () => {
    isActive.value = false;
  };

  const handleOpenModal = () => {
    isActive.value = true;
  };

</script>

<template>

  <v-container>

    <Addtask 
      :isActive="isActive"
      @add-task="handleAddTask"
      @close-modal="handleCloseModal"
      @open-modal="handleOpenModal"
    />

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
    
  </v-container>

</template>
