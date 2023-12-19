<template>
    <h4>Count is: {{ counter }}</h4>
    <button @click="incrementCounter">Increment counter</button>
</template>

<script lang="ts">
    import {defineComponent} from "vue"

    // for create a component use definecComponent function
    // receive a object
    export default defineComponent({
        name: 'CounterOption',
        data() {
            let counter = 0;
            return {counter};
        },
        methods: {
            incrementCounter() {
                this.counter++;
            }
        },
    })
</script>

<style scoped>
</style>