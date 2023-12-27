<template>
  <div>
    <h3>Post view: {{ postId }}</h3>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    let postId = ref('');

    onMounted(() => {
        const route = useRoute();
        postId.value = route.params.id;
    })

</script>

<style scoped>
</style>