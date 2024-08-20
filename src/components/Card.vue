<script lang="ts">

  import draggable from 'vuedraggable';
  import Task from './Task.vue';

  export default {
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
        type: Array,
        required: true,
      },
      group: {
        type: String,
        required: true,
      },
    },
    methods: {
    }
  };

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
