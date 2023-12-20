<!-- A component is divided in 4 parts

    1.The first part is the template. The template has a content 'html' or others components like html 
    2.The script has the code in js or ts 
    3.Styles has the design of the view

    Note: When the componen has not a defineComponent, the 'setup' is used to can use this component in other.
    The styles use scoped for not use this design in other component, that is to say, the styles are unique in this context

-->

<template>
    <!-- Rendering the value of counter -->
    <h4>Count is: {{ counter }}</h4>
    <!-- When the button ys cliked, the function incrementCounter is active -->
    <button @click="incrementCounter">Increment counter</button>
</template>

<script lang="ts">

    // importing the defineComponent from vue
    // this defineComponent helps to create a functional component
    import {defineComponent} from "vue"

    // for create a component use definecComponent function
    // receive a object
    export default defineComponent({
        // the first part is the name of the component
        name: 'CounterOption',
        // optionally can use components: {} to references others components in this same.
        // the data is the 'variables' or data to use in the component
        data() {
            let counter = 0;
            // returns the variables
            return {counter};
        },
        // methods are the function to use in the view
        methods: {
            incrementCounter() {
                // when the button is clicked counter increments 1
                this.counter++;
            }
        },
    })
</script>

<style scoped>
</style>