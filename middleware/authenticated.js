export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.userinfo) {
    store.dispatch('user/getUserInfo')
  } else {
    return redirect('/')
  }
}
