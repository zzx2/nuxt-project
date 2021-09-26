import { getUserInfo } from '~/api/user'
import { setStorage, getStorage } from '~/utils/storage'
export const state = () => ({
  userinfo: getStorage('userinfo')
})

export const mutations = {
  SET_USERINFO (state, userinfo) {
    state.userinfo = userinfo
  }
}

export const actions = {
  getUserInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then((res) => {
        console.log(res)

        setStorage('userinfo', res.data)
        commit('SET_USERINFO', res.data)
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
