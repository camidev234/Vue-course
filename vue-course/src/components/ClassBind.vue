<template>
    <p v-bind:class="{
        // 'class' : condition

        // when the boolean is true the color change to red
        'danger' : hasError,
    }">Message submit succesfully</p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ClassBind',
        setup() {
            let hasError = false;
            return { hasError }
        }
    })  
</script>

<style scoped>

.danger {
    color: red;
}

</style>