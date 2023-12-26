<template>
	<div>
        <input type="text" placeholder="your text" v-model="message">
        <br><span v-custom-font.red>{{ message }}</span>
        <br><span v-custom-font.xxl.green>{{ reverse }}</span>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, Ref } from 'vue';
	
    // export default defineComponent({
    //     name: 'ComputedData',
    //     data() {
    //         return {
    //             message: ''
    //         }
    //     },
    //     computed: {
    //         reverse() {
    //             return this.message.split('').reverse().join('')
    //         }
    //     }
    // })
    
    let message:Ref<string> = ref('');
    const reverse = computed(() => message.value.split('').reverse().join(''))
    
</script>

<style scoped>
	
</style>