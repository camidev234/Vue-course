<template>
  <div class="container">
    <h1>Post list</h1>
    <ul class="postList">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import PostService from '../services/PostService';


// create a new PostService
const service = new PostService();

// the method getPosts is accessed
const posts = service.getPosts();


// when the component is mounted await the fetch of the data
onMounted(async () => {
  await service.fetchAll();
})


// export default defineComponent({
//   name: "ServiceOne",
//   setup() {
//     const service = new PostService();
//     const posts = service.getPosts();

//     onMounted(async () => {
//       await service.fetchAll();
//     })

//     return { posts };
//   }
// });
</script>

<style scoped>

</style>
