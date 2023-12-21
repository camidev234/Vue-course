<template>
    <form action="">
        <input type="text" v-model="inputText"/>
        <input v-model="agree" type="checkbox" name="" id="" /> Accept terms and conditions
        <select name="" id="" v-model="country">
            <option value="Spain">Spain</option>
            <option value="Colombia">Colombia</option>
            <option value="Australia">Australia</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'ModelForm',
        setup() {
            let inputText = ref('');
            let agree = ref(true);
            let country = ref('Colombia');
            // const updateAgree = () => agree.value = false; 
            return { inputText, agree, country }
        }
    })
</script>

<style scoped>
</style>