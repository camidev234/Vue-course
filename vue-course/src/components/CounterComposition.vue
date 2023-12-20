<template>
    <h3>Counter is: {{ counter }}</h3>
    <button @click="incrementCounter">Increment</button>
</template>

<script lang="ts">

    // import Ref to bring the data type Ref
    // use ref to specify that the value is a reference
    import { defineComponent, ref, Ref } from 'vue';
    export default defineComponent({
        name: 'CounterComposition',
        // in composition API define setup
        setup() {
            // in the setup function it is the variables and methods
            // counter is a Ref and the value is a ref, this is to do the elements reactive.
            let counter:Ref = ref(0);

            // incrementsCounter return a Void
            const incrementCounter = ():void => {
                // incrementing counter 1
                counter.value++;
            }

            // returns the counter and the function
            return {counter, incrementCounter};
        }
        
    })
</script>
