<template>
  <nav-bar :tabIndex="-1"></nav-bar>
  <v-container v-if="selectedCompany != null">
    <div class="d-flex justify-end">
      <v-card width="512">
        <v-img :src="getImage"></v-img>

        <div class="text-h6 pa-3">
          {{ selectedCompany.name }}
        </div>
      </v-card>

      <v-card class="w-100 ml-5" variant="flat">
        <v-card-title>Информация о компании</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-if="
            selectedCompany.description == null ||
            selectedCompany.description == undefined ||
            selectedCompany.description.length == 0
          ">
            Нет описания
          </div>
          <div v-else class="text-body-1">
            {{ selectedCompany.description }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
  <v-container class="mt-10">
    <div class="text-h5">Товары</div>
  </v-container>
  <v-container v-if="products != null" class="d-flex flex-wrap">
    <v-card v-for="product in products" :key="product" class="mx-2 my-2">
      <v-img width="256" v-if="product.imageUrl != null" :src="getProductImageUrl(product.imageUrl)"></v-img>
      <v-img width="256" v-else src="@/assets/NoImageV2.jpg"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>
        <div class="d-flex flex-wrap">
          <h6 class="text-body-1 mr-3">Категории:</h6>
          <v-chip v-if="product.categories == null || product.categories.length == 0" class="mr-3" label color="red"
            size="small" prepend-icon="mdi-close-circle-outline">
            Нет
          </v-chip>
          <h6 v-else v-for="category in product.categories" :key="category" class="text-body-2">
            <v-chip size="small">
              {{ category.name }}
            </v-chip>
          </h6>
        </div>
        <div class="d-flex mt-1">
          <h6 class="text-body-1">Кол-во отзывов:</h6>
          <h6 class="text-body-1 ml-2">{{ product.reviews.length }}</h6>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn @click="moreAtProduct(product)" variant="text" color="blue">Открыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

import CatalogRequests from "@/requests/catalogRequests";
import { mapGetters } from "vuex";
import RequestsConfig from "@/requests/requestConfig";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getSelectedCompany"]),
    getImage() {
      return RequestsConfig.getImagePath(this.selectedCompany.imageUrl);
    },
  },
  props: {
    companyId: {
      required: true,
    },
  },
  data() {
    return {
      selectedCompany: null,
      products: null,
    };
  },
  methods: {
    getProductImageUrl(imageUrl) {
      return RequestsConfig.getImagePath(imageUrl);
    },
    moreAtProduct(product) {
      this.$router.push({
        name: "more-at-product",
        params: {
          productId: product.id,
        },
      });
    },
  },
  async mounted() {
    this.selectedCompany = await CatalogRequests.getCompany(this.companyId);
    this.products = await CatalogRequests.getCompanyProducts(this.companyId);
  },
};
</script>

<style></style>