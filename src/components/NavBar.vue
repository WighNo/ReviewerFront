<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <div class="d-flex">
        <div class="d-flex" style="user-select: none">
          <v-icon
            icon="mdi-message-fast-outline"
            color="grey-darken-3"
          ></v-icon>
          <div
            class="text-h5 ml-2"
            @click="this.$router.push({ name: 'Home' })"
          >
            Отзовик
          </div>
        </div>
        <v-divider vertical class="ml-6 mr-1"></v-divider>
        <v-btn @click=" this.$router.push({ name: 'Home' })" variant="text" :color="tabIndex == 0 ? 'blue-darken-1' : 'grey-darken-3'"
          >Главная</v-btn
        >
        <v-btn @click="this.$router.push({ name: 'catalog' })" :color="tabIndex == 1 ? 'blue-darken-1' : 'grey-darken-3'">Каталог</v-btn>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    tabIndex: Number,
  },
};
</script>

<style>
</style>