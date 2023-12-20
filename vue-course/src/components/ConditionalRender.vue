<template>
   <span v-if="age < 18">Eres menor de edad</span>
   <span v-else>Eres mayor de edad</span>
   <!-- <span v-show="age < 18">Eres menor de edad</span>
   <span v-show="age >= 18">Eres mayor de edad</span> -->
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ConditionalRender',
        setup() {
            let age = 17;
            return { age }
        }
    }) 
</script>

<style scoped>
</style>