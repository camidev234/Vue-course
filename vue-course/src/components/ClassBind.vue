<template>

    <span v-bind:class="{
        'danger': status
    }">Message submit Successfully</span>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ClassBind',
        setup() {
            let status = true;
            return { status }
        }
    })
</script>

<style scoped>
    .danger {
        color: tomato;
    }
</style>