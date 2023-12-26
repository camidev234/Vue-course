<template>
  <div class="facture">
    <section class="factureHead">
      <h5>Factura </h5>
    </section>
    <section class="factureBody">
      <section class="factureContent">
        <article v-for="(item, index) in props.items" :key="index" class="item">
          <span class="product">{{ item.product }}</span>
          <span>${{ item.price }}</span>
        </article>
        <article class="total">
          <h5>Subtotal: ${{ subTotal }}</h5>
          <h4>Total: ${{ total }}</h4>
        </article>
        <article class="footer">
          <h6>*Impuestos incluidos*</h6>
        </article>
      </section>
    </section>
  </div>
</template>

<script setup>
  import { defineProps, ref, onUpdated, computed } from 'vue';

  const vat = 19;

  const props = defineProps(['items']);

  const subTotal = ref(0);

  const calculateSubTotal = () => {
    subTotal.value = props.items.reduce((total, item) => total + item.price, 0);
  };

  let total = computed(() => ((vat*subTotal.value) / 100) + subTotal.value);

  onUpdated(calculateSubTotal)

</script>

<style scoped>
.facture {
  font-family: monospace;
  background-color: rgb(250, 250, 250);
  width: 30%;
  border-radius: 15px;
  box-shadow: 1px 1px 10px #c0c0c0;
  padding-bottom: 10px;
}

span {
  font-size: 13px;
}

.factureHead {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.factureBody {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.factureContent {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.factureContent .item {
  width: 100%;
  min-height: 20px;
  max-height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}


.total {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>