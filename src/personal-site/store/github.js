export const state = () => ({
  repos: []
})

export const mutations = {
  update(state, repos) {
    state.repos = repos
  }
}
export const actions = {
  async getGithubRepos({ commit }, userId) {
    const fullUrl = `api/userinfo/${userId}/coderepos`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
