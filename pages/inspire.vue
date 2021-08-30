<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container>
      <v-row
        justify="start"
      >
        <v-col
          v-for="i in 5"
          :key="i"
          cols="3"
        >
          <v-card

            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
}
</script>
