<template>
    <span v-if="age < 18">Eres menor de edad</span>
    <span v-else>Eres mayor de edad</span>
</template>

<script lang="ts" setup>
    let age = 10;
</script>


<style scoped>
    span {
        color : green;
        font-weight: bold;
        font-size: 20px;
        
    }
</style>