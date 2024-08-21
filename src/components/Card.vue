<script lang="ts" setup>

  import { defineComponent, ref, computed, defineProps } from 'vue';
  import draggable from 'vuedraggable';
  import Task from './Task.vue';

  // Definerer de props vi forventer at modtage
  const props = defineProps<{
  title: string;
  tasks: Array<{ title: string; desc: string }>;
  group: string;
  }>();

  // reference til vores tasks
  const tasks = ref(props.tasks);

  const title = computed(() => props.title);
  const group = computed(() => props.group);

</script>

<template>

  <v-card 
    :title="title" 
    variant="tonal"
  >

    <draggable
      :list="tasks"
      :group="group"
      itemKey="title"
    >

      <template #item="{ element }">
        <Task :task="element" />
      </template>

    </draggable>

  </v-card>

</template>
