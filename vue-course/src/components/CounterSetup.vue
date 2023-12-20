<template>
    <h4>Count is: {{ counter }}</h4>
    <button @click="incrementCounter">Increment counter</button>
</template>

<!-- When use setup, is not necessary: import defineComponent, and include another key-value. Only
define the data and create the methods.

The variables and functions are returns automatic.

-->

<script lang="ts" setup>
    import { Ref, ref } from 'vue';
    let counter:Ref = ref(0);
    const incrementCounter = ():void => {
        counter.value++;
    }
</script>