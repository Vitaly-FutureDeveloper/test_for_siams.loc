<template>
  <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-sheet
          :color="colors[i]"
          height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }}
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'SIAMS',
        'Новаторские технологии',
        'Удобно в использовании',
        'Быстрый запуск и работа',
        'Интуитивный интерфейс',
      ],
    }
  },
}
</script>