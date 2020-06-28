<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Gallery',

    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          }
        ]
      }
    },
  }
</script>
