<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Task',
        props: {
            task: {
            type: Object,
            required: true
            },
        },
        setup(props) {
            // Props kan anvendes direkte i template
            return {
            task: props.task,
            };
        },
    });

</script>

<template>

    <v-card 
        class="mb-4 mx-3" 
        variant="outlined"
    >
        <v-card-title>
            {{ task.title }}
        </v-card-title>

        <v-card-text>
            {{ task.desc }}
        </v-card-text>

    </v-card>
    
</template>
