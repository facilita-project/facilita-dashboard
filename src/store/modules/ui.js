export const CHANGE_SEARCH_BAR_STATUS = 'CHANGE_SEARCH_BAR_STATUS'
export const SET_SEARCH_WORD = 'SET_SEARCH_WORD'

export default {
  state: {
    searchBarStatus: false,
    searchWord: ''
  },
  actions: {
    changeSearchBarStatus ({ commit }, status) {
      commit(CHANGE_SEARCH_BAR_STATUS, status)
    },
    setSearchWord ({ commit }, event) {
      commit(SET_SEARCH_WORD, event.target.value)
    }
  },
  mutations: {
    [CHANGE_SEARCH_BAR_STATUS]: (state, status) => {
      state.searchBarStatus = status
    },
    [SET_SEARCH_WORD]: (state, word) => {
      state.searchWord = word
    }
  }
}
