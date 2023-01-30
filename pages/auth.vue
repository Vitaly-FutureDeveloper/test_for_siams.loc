<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="имя"
        required
    ></v-text-field>

    <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="пароль"
        required
    ></v-text-field>

    <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Вы должны согласиться с условиями перед использовании программы!']"
        label="Вы согласны с правилами?"
        required
    ></v-checkbox>

    <v-btn
        color="success"
        class="me-4"
        @click="onSubmit"
    >
      Войти
    </v-btn>
  </v-form>
</template>


<script lang="ts">
import { mapActions } from 'vuex';

interface DataType {
  valid: boolean,

  name: string,
  nameRules: Array< (v:string) => void >,

  password: string,
  passwordRules: Array< (v:string) => void >,
  checkbox: boolean,
};


export default {
  name: "auth",


  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v:string) => !!v || 'Имя обязательно для ввода',
      (v:string) => (v && v.length <= 15) || 'Имя не может превышать 15 символов',
    ],
    password: '',
    passwordRules: [
      (v:string) => !!v || 'Пароль обязателен для ввода',
      (v:string) => v.length >= 8 || 'Пароль должен быть 8 символов и больше',
    ],
    checkbox: true,
  } as DataType),

  methods: {
    ...mapActions('auth', ['addLogin']),

    async onSubmit () {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        const name = this.$data.name;
        const password = this.$data.password;

        // this.$store.commit('auth/addLogin', name, password);
        this.addLogin(name, password);
      }
    },
  },
}
</script>

<style scoped>

</style>