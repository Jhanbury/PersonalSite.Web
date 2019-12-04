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
    const url = 'http://personal-site-api.azurewebsites.net/'
    const fullUrl = `${url}api/github-repos`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
