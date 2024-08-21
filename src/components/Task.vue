<script lang="ts" setup>

    import { defineProps } from 'vue';

    // Definer props
    const props = defineProps<{
    task: {
        title: string;
        desc: string;
    };
    }>();

</script>


<template>

  <v-card 
      class="mb-4 mx-3" 
      variant="outlined"
  >

      <v-card-title>
          {{ props.task.title }}
      </v-card-title>

      <v-card-text>
          {{ props.task.desc }}
      </v-card-text>

  </v-card>

</template>
