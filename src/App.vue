<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    'app-header': Header
  },

  data: () => ({
    //
  }),
};
</script>
