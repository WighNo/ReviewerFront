<template>
  <NavBar :tabIndex="0"></NavBar>
  <v-container class="mt-5">
    <div class="text-center text-h4">Топ-10 рецензий</div>
    <v-divider class="mt-3"></v-divider>
    <v-carousel> </v-carousel>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
