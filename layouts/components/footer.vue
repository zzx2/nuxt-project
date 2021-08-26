<template>
  <v-footer
    :fixed="fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    fixed () {
      return this.$store.state.layout.fixed
    }
  }
}
</script>

<style>

</style>
