<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <div class="d-flex justify-end">
        <div
          class="d-flex"
          style="user-select: none; cursor: pointer"
          @click="this.$router.push({ name: 'Home' })"
        >
          <v-icon icon="mdi-book-heart-outline" color="blue-darken-1"></v-icon>
          <div class="d-flex ml-2">
            <div class="text-h5 font-weight-light text-blue">Revi</div>
            <div class="font-weight-bold text-h5 text-blue">You</div>
          </div>
        </div>
        <v-divider vertical class="ml-6 mr-1"></v-divider>
        <v-btn
          @click="this.$router.push({ name: 'Home' })"
          variant="text"
          :color="tabIndex == 0 ? 'blue-darken-1' : 'grey-darken-3'"
          >Главная</v-btn
        >
        <v-btn
          @click="this.$router.push({ name: 'catalog' })"
          class="mr-auto"
          :color="tabIndex == 1 ? 'blue-darken-1' : 'grey-darken-3'"
          >Каталог</v-btn
        >

        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              class="mr-10"
              prepend-icon="mdi-account-circle-outline"
              >Личный кабинет</v-btn
            >
          </template>
          <v-list>
            <v-list-item @click="console.log('dwd')">
              <v-list-item-title>Вход</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Регистрация</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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

<style></style>