export const state = () => ({
  socialLinks: []
})

export const mutations = {
  update(state, links) {
    state.socialLinks = links
  }
}
export const actions = {
  async getSocialLinks({ commit }, userId) {
    const fullUrl = `api/userinfo/${userId}/socialmediaaccounts`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
