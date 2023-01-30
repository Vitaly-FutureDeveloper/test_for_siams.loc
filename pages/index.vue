<template>
  <v-col>
    <v-sheet
        min-height="70vh"
        rounded="lg"
    >

      <NuxtPage />

    </v-sheet>
  </v-col>
</template>



<script lang="ts">

definePageMeta({
  middleware: ["isauth"]
})

export default {
  components: {},
}
</script>