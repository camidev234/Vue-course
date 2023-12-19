<template>
    <div class="container">
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
</template>

<script lang="ts" setup>
    import PostCard from './PostCard.vue';
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>