<template>
  <div class="container-c">
    <form action="" @submit.prevent="addItem">
        <label for="">Product: </label><br>
        <input type="text" placeholder="Product" v-model="actualProduct.product"><br>
        <label for="">Price: </label><br>
        <input type="number" placeholder="Price" v-model="actualProduct.price"><br>
        <button>Add this product</button>
    </form>
  </div>
</template>

<script setup>

    import { ref, defineEmits } from 'vue';

    let actualProduct = ref({
        product: '',
        price: 0,
    })

    const emit = defineEmits(['addNewItem']);

    const addItem = () => {
      emit('addNewItem', actualProduct.value);

      actualProduct.value.product = '';
      actualProduct.value.price = 0;

    };

</script>

<style scoped>
.container-c {
  background-color: rgb(250, 250, 250);
  font-family: sans-serif;
  width: 30%;
  height: 300px;
  border-radius: 15px;
  box-shadow: 5px 3px 15px #2849da3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container form {
  width: 75%;
}

form input {
  margin-top: 5px;
  width: 100%;
  height: 33px;
  padding-left: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #b3b3b3;
}

form button {
  margin-top: 10px;
  width: 40%;
  height: 35px;
  background-color: rgb(19, 19, 19);
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: blue;
}
</style>