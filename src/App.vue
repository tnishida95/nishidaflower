<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Nishida Flowers</h1>
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <Quote/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Quote from './components/Quote';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Quote
  },

  data: () => ({
    //
  }),
};
</script>
