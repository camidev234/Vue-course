<template>
    <div class="container">
        <ProductForm @addNewItem="addItem"/>
        <PurchaseFacture :items="items"/>
    </div>
</template>

<script setup>
import ProductForm from './ProductForm.vue'
import PurchaseFacture from './PurchaseFacture.vue';
import { ref } from 'vue';

let items = ref([]);

const addItem = (item) => {
    items.value.push({
        product: item.product,
        price: item.price
    });

}
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-top: 40px;
    }

</style>
