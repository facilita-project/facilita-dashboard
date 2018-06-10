export const CHANGE_SEARCH_BAR_STATUS = 'CHANGE_SEARCH_BAR_STATUS'

export default {
  state: {
    searchBarStatus: false
  },
  actions: {
    changeSearchBarStatus ({ commit }, status) {
      commit(CHANGE_SEARCH_BAR_STATUS, status)
    }
  },
  mutations: {
    [CHANGE_SEARCH_BAR_STATUS]: (state, status) => {
      state.searchBarStatus = status
    }
  }
}
