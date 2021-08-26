<template>
  <v-navigation-drawer
    v-model="rightdrawer"
    :right="right"
    temporary
    fixed
    @input="change"
  >
    <v-list>
      <!-- <v-list-item @click.native="$store.commit('layout/changeStatus',{key:'right',status:!right})">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>点击切换位置</v-list-item-title>
      </v-list-item> -->
      <v-list-item class="px-3">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            zzx
          </v-list-item-title>
          <v-list-item-subtitle>一位已经躺平的前端工程师</v-list-item-subtitle>
          <v-list-item-subtitle>781914164</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      rightdrawer: false
    }
  },
  computed: {
    right () {
      return this.$store.state.layout.right
    }
  },
  watch: {
    '$store.state.layout.rightDrawer': {
      handler (val) {
        this.rightdrawer = val
      },
      immediate: true
    }
  },
  methods: {
    change (val) {
      this.$store.commit('layout/changeStatus', { key: 'rightDrawer', status: val })
    }
  }
}
</script>

<style>

</style>
