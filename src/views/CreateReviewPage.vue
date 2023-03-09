<template>
  <div v-if="product != null" class="bg-grey-lighten-4 w-100 h-100 pa-5">
    <v-container class="mb-5 bg-white rounded-lg">
      <div class="d-flex justify-end">
        <div class="text-body-1 mr-auto">Создание рецензии</div>
        <v-btn
          @click="backToProduct"
          color="red"
          variant="outline"
          prepend-icon="mdi-cancel"
        >
          Отмена
        </v-btn>
      </div>
      <div class="mt-1 mb-2 ml-5">
        <v-row>
          <v-col cols="2">
            <v-card max-width="256">
              <v-img v-if="product.imageUrl != null" :src="getImage"></v-img>
              <v-img v-else src="@/assets/NoImageV2.jpg"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2">
            <div class="text-h6 font-weight-regular">{{ product.name }}</div>
          </v-col>
        </v-row>
      </div>
      <div></div>
    </v-container>

    <v-container class="bg-white">
      <v-container>
        <v-text-field
          label="Ваше общее впечатление"
          variant="solo"
        ></v-text-field>
        <v-textarea label="Содержание" variant="outlined"></v-textarea>

        <div>
          <div class="d-flex">
            <div class="mb-2 text-h6 font-weight-regular">Достоинства</div>
            <v-icon icon="mdi-plus" class="mt-1 ml-2"></v-icon>
          </div>

          <div class="d-flex justify-end align-top">
            <v-text-field
              v-model="currentAdvantage"
              variant="outlined"
            ></v-text-field>
            <v-btn
              @click="addAdvantages"
              color="blue"
              icon="mdi-plus"
              class="mt-1 ml-5"
              variant="flat"
            ></v-btn>
          </div>
          <v-card class="pr-16 pl-5 mr-1" variant="flat">
            <v-list :items="advantages" item-props></v-list>
          </v-card>
        </div>
        <div class="mt-5">
          <div class="d-flex">
            <div class="mb-2 text-h6 font-weight-regular">Недостатки</div>
            <v-icon class="mt-1 ml-2" icon="mdi-minus"></v-icon>
          </div>
          <div class="d-flex justify-end align-top">
            <v-text-field
              v-model="currentFlaw"
              variant="outlined"
            ></v-text-field>
            <v-btn
              @click="addFlaw"
              color="blue"
              icon="mdi-plus"
              class="mt-1 ml-5"
              variant="flat"
            ></v-btn>
          </div>
          <v-card class="pr-16 pl-5 mr-1" variant="flat">
            <v-list :items="flaws" item-props></v-list>
          </v-card>
        </div>

        <div class="d-flex mt-5">
          <div class="text-h6 mr-3 font-weight-regular">Общая оценка:</div>
          <v-rating size="31" hover active-color="yellow-accent-4"></v-rating>
        </div>

        <div class="d-flex justify-end">
          <v-btn class="mt-5" block color="blue" variant="text"
            >Оставить рецензию</v-btn
          >
        </div>
      </v-container>
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
  data() {
    return {
      product: null,
      currentAdvantage: null,
      currentFlaw: null,
      advantages: [],
      flaws: [],
    };
  },
  methods: {
    addAdvantages() {
      if (this.currentAdvantage == null && this.currentAdvantage.length == 0) {
        return;
      }

      this.advantages.push({
        title: `${this.currentAdvantage}`,
        class: "bg-grey-lighten-5 mb-2",
      });
      this.currentAdvantage = "";
    },
    addFlaw() {
      if (this.currentFlaw == null && this.currentFlaw.length == 0) {
        return;
      }

      this.flaws.push({
        title: `${this.currentFlaw}`,
        class: "bg-grey-lighten-5 mb-2",
      });
      this.currentFlaw = "";
    },
    backToProduct() {
      this.$router.push({
        name: "more-at-product",
        params: {
          productId: this.productId,
        },
      });
    },
  },
  async mounted() {
    this.product = await CatalogRequests.getProduct(this.productId);
    console.log(this.product);
  },
};
</script>

<style>
</style>