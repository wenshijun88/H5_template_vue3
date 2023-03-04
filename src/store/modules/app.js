const state = {
  showLoading: false,
  loadingNumber: 0,
}

const getters = {
  showLoading (state) {
    return state.showLoading
  }
}

const mutations = {
  PLUS_LOADING_NUMBER (state) {
    state.loadingNumber++
  },
  SUBTRACT_LOADING_NUMBER (state) {
    if (state.loadingNumber > 0) {
      state.loadingNumber--
    }
  },
  SET_LOADING_STATE (state, loadingState) {
    state.showLoading = loadingState
  },
}

const actions = {
  setLoading ({commit, state}) {
    return new Promise(() => {
      commit('SUBTRACT_LOADING_NUMBER')
      if (state.loadingNumber <= 0) {
        commit('SET_LOADING_STATE', false)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
