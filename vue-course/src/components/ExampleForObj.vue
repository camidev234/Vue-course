<template>
<ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
</ul>

</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue';
    interface ICountry {
        code: string,
        name: string
    }
    // typing the var countries to array and Use the interface ICountry
    let countries:Ref<Array <ICountry>> = ref([
        {
            code: 'es',
            name: 'España'
        },
        {
            code: 'n',
            name: 'uk'
        },
        {
            code: 'fr',
            name: 'francia'
        },
        {
            code: 'col',
            name: 'colombia'
        }
    ])
</script>

<style scoped>

</style>