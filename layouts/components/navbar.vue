<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="$store.commit('layout/changeStatus',{key:'drawer',status:!drawer})" />
    <v-btn
      icon
      @click.stop="$store.commit('layout/changeStatus',{key:'miniVariant',status:!miniVariant})"
    >
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="$store.commit('layout/changeStatus',{key:'clipped',status:!clipped})"
    >
      <v-icon>mdi-application</v-icon>
    </v-btn>
    <!-- <v-btn
      icon
      @click.stop="$store.commit('layout/changeStatus',{key:'fixed',status:!fixed})"
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" /> -->
    <v-spacer />

    <v-btn
      icon
    >
      <v-avatar @click.stop="$store.commit('layout/changeStatus',{key:'rightDrawer',status:true})">
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: '博客'
    }
  },
  computed: {
    clipped () {
      return this.$store.state.layout.clipped
    },
    drawer () {
      return this.$store.state.layout.drawer
    },
    miniVariant () {
      return this.$store.state.layout.miniVariant
    },
    fixed () {
      return this.$store.state.layout.fixed
    }
  }
}
</script>

<style>

</style>
