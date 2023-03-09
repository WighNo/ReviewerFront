<template>
  <v-btn
    @click="backToCompany"
    style="position: absolute; margin-left: 10%; margin-top: 1%"
    prepend-icon="mdi-arrow-left"
    variant="text"
    color="grey-darken-2"
    >Назад</v-btn
  >
  <v-container v-if="product != null">
    <div class="d-flex justify-end">
      <v-card width="512">
        <v-img v-if="product.imageUrl != null" :src="getImage"></v-img>
        <v-img v-else src="@/assets/NoImageV2.jpg"></v-img>

        <div class="text-h6 pa-3">
          {{ product.name }}
        </div>
      </v-card>

      <v-card class="w-100 ml-5" variant="flat">
        <v-card-title>О товаре</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div
            v-if="
              product.description == null ||
              product.description == undefined ||
              product.description.length == 0
            "
          >
            Нет описания
          </div>
          <div v-else class="text-body-1">
            {{ product.description }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
  <div v-if="product != null">
    <v-container class="mt-5">
      <div class="text-h5">Рецензии</div>
    </v-container>
    <v-container v-if="product.reviews.length > 0">
      <v-card v-for="review in product.reviews" :key="review" class="pa-1">
        <v-card-title>
          {{ review.title }}
        </v-card-title>
        <v-card-text>
          {{ review.content }}
        </v-card-text>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-btn
        @click="createReview"
        block
        variant="flat"
        size="x-large"
        color="grey-lighten-4"
        prepend-icon="mdi-pencil"
      >
        Написать отзыв
      </v-btn>
      <v-card variant="tonal" class="text-center mt-5">
        <div class="text-h5 pa-5">У товара пока нет рецензий</div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CatalogRequests from "@/requests/catalogRequests";
import RequestsConfig from "@/requests/requestConfig";

export default {
  computed: {
    getImage() {
      return RequestsConfig.getImagePath(this.product.imageUrl);
    },
  },
  props: {
    productId: {
      required: true,
    },
  },
  methods: {
    createReview() {
      this.$router.push({
        name: "create-review",
        params: {
          productId: this.productId,
        },
      });
    },
    backToCompany() {
      this.$router.push({
        name: "company",
        params: {
          companyId: this.product.owner.id,
        },
      });
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

<style></style>