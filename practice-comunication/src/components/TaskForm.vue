<template>
    <div class="containerForm">
      <form action="" @submit.prevent>
        <label for="">Your task Here: </label><br>
        <input type="text" placeholder="your task" v-model="task.task"><br>
        <br><span>{{ task.task }}</span><br><br>
        <button @click="addTask">Add task</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const task = ref({
    task: '',
  });
  
  const emit = defineEmits(['addNewTask']);
  
  const addTask = () => {
    emit('addNewTask', task.value);
  
    task.value.task = '';
  };
  
  const props = defineProps(['tasks']);
  </script>
  
  <style scoped>
  </style>
  