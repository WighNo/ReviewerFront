<template>
  <v-container v-if="product != null">
    <div class="text-h6">
      {{ product.name }}
    </div>
  </v-container>
</template>

<script>
import CatalogRequests from "@/requests/catalogRequests";

export default {
  props: {
    productId: {
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    this.product = await CatalogRequests.getProduct(this.productId);
    console.log(this.product);
  },
};
</script>

<style>
</style>