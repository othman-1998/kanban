<script lang="ts">

  import { defineComponent, ref } from 'vue';
  import draggable from 'vuedraggable';
  import Task from './Task.vue';

  export default defineComponent({
    name: 'Card',
    components: {
      Task,
      draggable,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      tasks: {
        type: Array as () => Array<{ title: string; desc: string }>,
        required: true,
      },
      group: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      // Hvis du har brug for at manipulere eller tilføje ekstra reaktivitet, kan du bruge `ref` eller `computed`
      const tasks = ref(props.tasks);

      return {
        tasks, // Returér props eller reaktive data, som skal bruges i templatet
      };
    },
  });

</script>

<template>

  <v-card 
    :title="title" 
    variant="tonal"
  >

    <draggable
      :list="tasks"
      :group="group"
    >

      <template #item="{ element }">
        <Task :task="element" />
      </template>

    </draggable>

  </v-card>

</template>
