<template>
  <v-navigation-drawer
    v-model="Drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    @input="change"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      Drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '主页',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '文章',
          to: '/inspire'
        }
      ]
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
    }
  },
  watch: {
    drawer: {
      handler (val) {
        this.Drawer = val
      },
      immediate: true
    }
  },
  methods: {
    change (val) {
      this.$store.commit('layout/changeStatus', { key: 'drawer', status: val })
    }
  }
}
</script>

<style>

</style>
