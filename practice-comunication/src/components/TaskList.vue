<template>
  <div class="list">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="elem in tasks" :key="elem.id">
          <td>{{ elem.id }}</td>
          <td>{{ elem.task }}</td>
        </tr>
      </tbody>
    </table>
    <TaskForm @addNewTask="addTask" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TaskForm from './TaskForm.vue';

let tasks = ref([]);

const addTask = (task) => {
  tasks.value.push({
    id: tasks.value.length + 1,
    task: task.task,
  });
};
</script>

<style scoped>
</style>
