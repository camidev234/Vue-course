<template>
  <div class="user-card">
    <span class="user-info">Nombre: {{ user.name }}</span>
    <span class="user-info">Email: {{ user.email }}</span>
    <span class="user-info">Role: {{ user.role.name }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["user"]);
</script>

<style scoped>
.user-card {
font-family: sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}
</style>
