<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.code">{{ user.name }}</li>
    </ul>
</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue';
    interface IUser {
        name: string,
        code: string
    }
    const users:Ref<Array<IUser>> = ref([
        {
            name: 'Camilo',
            code: '1013108226' 
        },
        {
            name: 'Sebastian',
            code: '193829389'
        },
        {
            name: 'Daniel',
            code: '182389190'
        },
        {
            name: 'Danna',
            code: '232244444'
        }
    ])
</script>

<style scoped>
</style>