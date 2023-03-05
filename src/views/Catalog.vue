<template>
  <nav-bar :tabIndex="1"></nav-bar>
  <v-container class="d-flex flex-wrap align-stretch">
    <v-card
      v-for="company in getCompanies"
      :key="company"
      class="mx-2 my-2"
      max-width="265"
      minHeight="365"
      max-height="365"
    >
      <v-img
        width="265"
        aspect-ratio="1/1"
        :src="getImagePath(company.imageUrl)"
      ></v-img>
      <v-card-title>
        {{ company.name }}
      </v-card-title>
      <div class="h-100 d-flex justify-end">
        <v-btn @click="moreAtCompany(company)" variant="text" color="blue"
          >Подробнее</v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import RequestsConfig from "@/requests/requestConfig";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getCompanies"]),
  },
  methods: {
    ...mapActions(["updateCompanies", "setSelectedCompany"]),
    getImagePath(imageUrl) {
      return RequestsConfig.getImagePath(imageUrl);
    },
    moreAtCompany(company) {
      this.$router.push({
        name: "company",
        params: {
          companyId: company.id,
        },
      });
    },
  },
  async mounted() {
    await this.updateCompanies();
  },
};
</script>

<style>
</style>