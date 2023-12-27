<template>
  <div>
    <span>Id: {{ postId }}</span><br>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

let postId = ref("");


onMounted(() => {
  const route = useRoute();
  postId.value = route.params.id;
});

</script>

<style scoped></style>
