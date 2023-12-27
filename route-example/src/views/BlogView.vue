<template>
  <div>
    <h3>This is the blog</h3>
    <ul>
        <li><RouterLink :to="{name: 'post', params: {
            id: 1
        }}">First Post</RouterLink></li>
        <li><RouterLink :to="{name: 'post', params: {
            id: 2
        }}">Second post</RouterLink></li>
        <li><RouterLink :to="{name: 'post', params: {
            id: 3
        }}">Third post</RouterLink></li>
        <li><RouterLink :to="{name: 'post', params: {
            id: 4
        }}">Four post</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>


<style scoped>
</style>