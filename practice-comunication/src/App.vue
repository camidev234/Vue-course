<!-- <template>
  <PurchaseList :purchases="purchases" @deletePurchase="deletePurchase"/>
  <PurchaseForm @addNewPurchase="addPurchase"/>
</template>

<script setup>

import { ref } from 'vue';
import PurchaseList from './components/PurchaseList.vue';
import PurchaseForm from './components/PurchaseForm.vue';

let purchases = ref([]);

const addPurchase = (purchase) => {
  purchases.value.push({
    product: purchase.product,
    quantity: purchase.quantity
  });
}

const deletePurchase = (purchase) => {
    const foundPurchaseIndex = purchases.value.findIndex(
      (element) => purchase.product === element.product
    );

    if (foundPurchaseIndex !== -1) {
      purchases.value.splice(foundPurchaseIndex, 1);
    }
}

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style> -->

<template>
  <ResumePurchase/>
</template>

<script setup>
import ResumePurchase from './components/ResumePurchase.vue';

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
