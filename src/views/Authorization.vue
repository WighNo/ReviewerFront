<template>
  <div class="h-100">
    <v-card color="transparent" variant="flat" height="200">
      <div class="py-1 text-h3 d-flex justify-center mt-10">Отзовик</div>
    </v-card>
    <v-window v-model="window">
      <v-window-item value="login">
        <v-card class="mx-auto my-5" max-width="344" title="Вход">
          <v-container>
            <v-text-field
              v-model="email"
              color="primary"
              label="Почта"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              color="primary"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              variant="underlined"
            ></v-text-field>

            <div class="d-flex justify-center">
              <v-btn @click="login" color="success" block> Войти </v-btn>
            </div>
          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              block
              @click="toRegisterWindow"
              class="text-subtitle-2"
              variant="text"
              color="blue"
              >РЕГИСТРАЦИЯ</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-window-item>

      <v-window-item value="register">
        <v-card class="mx-auto my-5" max-width="344" title="Регистрация">
          <v-container>
            <v-text-field
              v-model="email"
              color="primary"
              label="Почта"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              color="primary"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              v-model="password"
              color="primary"
              label="Повтор пароля"
              placeholder="Введите пароль"
              type="password"
              variant="underlined"
            ></v-text-field>

            <div class="d-flex justify-center">
              <v-btn color="success" block> Зарегистрироваться </v-btn>
            </div>
          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="toLoginWindow"
              class="text-subtitle-2"
              variant="text"
              color="blue"
              block
              >АВТОРИЗАЦИЯ</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>
  
<script>
import AuthorizationRequests from "@/requests/authorizationRequests";
import IdentityStorage from "@/data/identityStorage";
import RequestsConfig from "@/requests/requestConfig";

export default {
  data() {
    return {
      email: "",
      password: "",
      terms: false,
      window: "login",
    };
  },
  methods: {
    toLoginWindow() {
      this.email = "";
      this.password = "";
      this.window = "login";
    },
    toRegisterWindow() {
      this.email = "";
      this.password = "";
      this.window = "register";
    },
    async register() {
      const data = {
        login: this.email,
        password: this.password,
      };

      const response = await AuthorizationRequests.register(data);
    },
    async login() {
      const data = {
        login: this.email,
        password: this.password,
      };

      const response = await AuthorizationRequests.login(data);
      IdentityStorage.setAccessToken(response.accessToken);

      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    if (
      IdentityStorage.getAccessToken() == null ||
      IdentityStorage.getAccessToken() == undefined
    ) {
      return;
    }
    
    this.$router.push({ name: "Home" });
  },
};
</script>
  
  <style>
</style>