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
    const fullUrl = `/api/user/${userId}/repos`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
