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
    const fullUrl = `api/userinfo/${userId}/projects`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
