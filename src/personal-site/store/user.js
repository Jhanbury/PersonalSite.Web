export const state = () => ({
  isLoading: false,
  userInfo: {},
  socialLinks: []
})

export const mutations = {
  update(state, links) {
    state.socialLinks = links
  },
  updateUser(state, user) {
    state.userInfo = user
  },
  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}
export const actions = {
  async getSocialLinks({ commit }, userId) {
    const fullUrl = `/api/user/${userId}/social`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  },
  async getUserInfo({ commit }, userId) {
    commit('updateIsLoading', true)
    const fullUrl = `/api/user/${userId}/about`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('updateUser', result.data)
    }
    commit('updateIsLoading', false)
  }
}
