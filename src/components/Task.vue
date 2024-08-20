<script lang="ts">

    export default {
        name: 'Task',
        props: {
            task: {
            type: String,
            required: true,
            },
        },
    };

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
