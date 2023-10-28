<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
// impoert define component to create the component
    import { defineComponent } from 'vue';
    // define component
    export default defineComponent({
        // the component has a name
        name: 'CounterOption',
        // in this line describe the components to use in this component
        // components: {MiComponente1, MiComponente2}
        components: {},
        // define the data to use, for example in this case we are going to use the counter to count the clicks
        // data is a functions and in the body define de data
        data() {
            let counter = 0;
            return {counter}
        },
        // after you have to define methods like a object and in this object create the functions to use in the component
        methods: {
            addCounter(){
                this.counter++
            }
        }
    })
</script>

<style>

</style>