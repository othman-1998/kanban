<script lang="ts" setup>

    import { ref } from 'vue';
    import { defineProps, defineEmits } from 'vue';

    // definerer her de props vi modtager
    const props = defineProps<{ isActive: boolean }>();

    // Definerer her de events vi modtager fra parent
    const emit = defineEmits(['add-task', 'close-modal', 'open-modal']);

    // lokale states
    const newTaskTitle = ref<string>('');
    const newTaskDesc = ref<string>('');

    // Add task funktion
    const addTask = () => {
    if (newTaskTitle.value && newTaskDesc.value) {
        // Emitter eventet til parent med en ny task
        emit('add-task', {
        title: newTaskTitle.value,
        desc: newTaskDesc.value
        });

        // tømmer inputfeltene når event er emittet
        newTaskTitle.value = '';
        newTaskDesc.value = '';
        // lukker modalen når event er emittet
        emit('close-modal');
    } else {
        alert('Please enter both title and description.');
    }
    };

</script>

<template>

  <v-dialog max-width="500" v-model="props.isActive">

    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="+"
        variant="flat"
        style="margin-bottom: 15px"
        @click="$emit('open-modal')"
      />
    </template>

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
          @click="$emit('close-modal')"
        ></v-btn>
        <v-btn
          text="Create"
          @click="addTask"
        ></v-btn>
      </v-card-actions>
      
    </v-card>
    
  </v-dialog>

</template>
