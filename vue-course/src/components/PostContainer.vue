<template>
    <div class="postContainer">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
</template>

<script setup lang="ts">

    import PostCard from './PostCard.vue';

</script>

<style scoped>
    .postContainer {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }
</style>