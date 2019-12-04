export const state = () => ({
  projects: []
})

export const mutations = {
  update(state, projects) {
    state.repos = projects
  }
}
export const actions = {
  async getProjects({ commit }, userId) {
    const url = 'http://personal-site-api.azurewebsites.net/'
    const fullUrl = `${url}api/userinfo/${userId}/projects`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
