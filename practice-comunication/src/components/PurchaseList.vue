<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
  <div class="list-purchases">
    <div class="prs">
    </div>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="purchase in props.purchases" :key="purchase.product">
                <td>{{ purchase.product }}</td>
                <td>{{ purchase.quantity }}</td>
                <td>
                    <button @click="deletePurchase(purchase)"><i class="bi bi-trash-fill"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
  </div><br>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const emit = defineEmits(['deletePurchase'])

    const props = defineProps(['purchases']);

    const deletePurchase = (purchase) => {
        emit('deletePurchase', purchase)
    }
</script>


<style scoped>
.list-purchases {
  margin-top: 20px;
}

.list-purchases table {
  width: 70%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 10px;
}

.list-purchases th, .list-purchases td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.list-purchases th {
  background-color: #4caf50;
  color: white;
}
</style>