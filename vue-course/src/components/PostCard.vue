<template>
    <article class="post">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quae est amet architecto facilis quas. Recusandae explicabo inventore dolorem dolore incidunt consequatur autem sunt, hic deserunt repudiandae debitis eaque sequi.</p>
        <PostBtn/>
    </article>
</template>

<script lang="ts" setup>
    import PostBtn from './PostBtn.vue';
</script>

<style scoped>
    .post {
        border-radius: 10px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #eee;
    }
</style>