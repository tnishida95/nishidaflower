<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome!</h1>
        <p class="subheading font-weight-regular">
          Thank you for considering Nishida Flowers for your floral needs!
          <br>Request a free quote
          <router-link to='/quote'>here</router-link>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>
