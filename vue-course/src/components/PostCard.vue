<template>
    <section class="postCard">
        <h3>Titulo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, odio?</p>
        <PostButton />
    </section>
</template>


<script setup lang="ts">
    import PostButton from './PostButton.vue';

</script>

<style scoped>
    .postCard {
        border: 1px solid black;
        padding: 20px;
        margin-bottom: 15px;
        border-radius: 10px;
        background-color: #eee;
    }
</style>