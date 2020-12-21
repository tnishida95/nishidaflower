<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Gallery</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
      }
    },
  }
</script>
