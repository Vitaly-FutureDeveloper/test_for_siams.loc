<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="42"
      ></v-avatar>

      <span>{{ a }}</span>

      <v-btn
          v-for="link in links"
          :key="link.title"
          variant="text"
          :to=link.link
      >
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
            density="compact"
            hide-details
            variant="solo"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>



<script lang="ts">

interface LinksType {
  links: Array<LinkType>
};
type LinkType = { title: string, link: string };


export default {
  computed: {
    a() {
      console.log(this.$store?.auth.state.a)
      return this.$store?.auth.state.a
    },
    name() {
      console.log(this.$store?.auth.getters.getName())
      return this.$store?.auth.getters.getName()
    },
  },

  data: () => ({
    links: [
      { title: 'Страница 1', link: 'page1' },
      { title: 'Страница 2', link: 'page2' },
    ],
  } as LinksType),

  components: {},
  name: "TheHeader",
}
</script>

