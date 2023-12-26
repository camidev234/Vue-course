<template>
    <form @submit.prevent class="purchase-form">
        <label for="">Product: </label><br>
        <input type="text" placeholder="product" v-model="purchase.product"><br>
        <label for="">Quantity: </label><br>
        <input type="text" placeholder="Quantity" v-model="purchase.quantity">
        <button @click="addPurchase">Add purchase</button>
    </form>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';

    let purchase = ref({
        product: '',
        quantity: ''
    })

    const emit = defineEmits(['addNewPurchase']);

    const addPurchase = () => {
        emit('addNewPurchase', purchase.value);

        purchase.value.product = '';
        purchase.value.quantity = '';
    }

</script>

<style scoped>
.purchase-form {
  max-width: 400px;
  margin: auto;
}

.purchase-form label {
  display: block;
  margin-bottom: 5px;
}

.purchase-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.purchase-form button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.purchase-form button:hover {
  background-color: #45a049;
}
</style>