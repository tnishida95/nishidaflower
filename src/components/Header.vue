<template>
  <v-app-bar app color="primary" dark>
    <v-container class="align-center">
      <v-row>
        <v-col>
          <h1>Nishida Flowers</h1>
        </v-col>
        <v-col align-self="center">
          <nav class="d-flex justify-end">
            <span>
              <router-link to='/' exact>Home</router-link>
              &nbsp;-&nbsp;
              <router-link to='/quote'>Request Quote</router-link>
              &nbsp;-&nbsp;
              <router-link to='/gallery'>Gallery</router-link>
            </span>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({

  }),
}
</script>

<style scoped>
.v-application a {
  color: white;
  border-radius: 10px;
  padding: 5px;
}
.router-link-active {
  background: white;
  color: #1976d2 !important;
}
</style>
