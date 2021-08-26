<template>
  <v-app dark>
    <Sidebar />
    <Navbar
      :clipped="clipped"
      :mini-variant="miniVariant"
      :drawer="drawer"
      :fixed="fixed"
    />
    <Main />
    <Info />
    <Footer :fixed="fixed" />
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue'
import Main from './components/main.vue'
import Sidebar from './components/sidebar.vue'
import Info from './components/info.vue'
import Footer from './components/footer.vue'
export default {
  components: {
    Sidebar,
    Navbar,
    Main,
    Footer,
    Info
  },
  data () {
    return {
      drawer: false,
      miniVariant: false,
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: '博客'
    }
  }
}
</script>
