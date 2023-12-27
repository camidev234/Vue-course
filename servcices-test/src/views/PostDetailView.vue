<template>
  <div>
    <h2>Post Detail</h2>
    <div class="postContainer">
      <div class="postCard">
        <h3>{{ post.title }}</h3>
        <span>{{ post.body }}</span>
      </div>
      <router-link :to="{name: 'PostList'}">Back</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import PostService from "../services/PostService";

const service = new PostService();
const post = service.getPost() 

onMounted(async () => {
  // using the actual route
  const route = useRoute();
  // asign the id of the params to the elm
  let elm = route.params.id;
  // fetch the post to show in the template
  await service.fetchById(elm)
})

</script>

<style scoped></style>
