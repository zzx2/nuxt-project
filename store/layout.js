export const state = () => ({
  drawer: false,
  rightDrawer: false,
  clipped: false,
  miniVariant: true,
  right: true,
  fixed: false
})

export const mutations = {
  changeStatus (state, { key, status }) {
    state[key] = status
  }
}
