<template>
  <p
    :style="{
      backgroundColor: 'green',
      color,
    }"
  >
    Message submit succesfully
  </p>
  <button @click="handleClick">Change color</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "StyleBind",
  setup() {
    let color = ref("#fff");
    const handleClick = () => color.value = "black";
    
    return { color, handleClick };
  },
});
</script>

<style scoped>
.danger {
  color: red;
}
</style>
