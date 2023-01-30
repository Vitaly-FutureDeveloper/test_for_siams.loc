<template>
  <v-app id="inspire">

    <TheHeader />

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">

                <v-list-item>

                  <v-list-item-title>
                    <NuxtLink class="navLink" to="/page1">Страница 1</NuxtLink>
                  </v-list-item-title>

                </v-list-item>

                <v-list-item>

                  <v-list-item-title>
                    <NuxtLink class="navLink" to="/page2">Страница 2</NuxtLink>
                  </v-list-item-title>

                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    color="grey-lighten-4"
                >
                  <v-list-item-title>
                    <NuxtLink class="navLink" to="/auth">Авторизация</NuxtLink>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>




          <slot />



        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script lang="ts">

import TheHeader from "../components/TheHeader.vue";

export default {
  components: {TheHeader},
}
</script>

<style lang="scss">
  .navLink{
    transition: 0.3s;
    color: inherit;
    text-decoration: none;

    &:hover{
      color: #673904;
      opacity: 0.7;
    }
  }
</style>