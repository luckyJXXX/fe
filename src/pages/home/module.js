import { Toast } from 'mint-ui'

export default {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    }
  },
  actions: {
    async getInit ({ commit, state, dispatch}, payload) {
      commit({
        type: 'showLoading'
      })
      Toast('show')
    }
  }

}