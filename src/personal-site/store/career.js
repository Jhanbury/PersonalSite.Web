export const state = () => ({
  timeline: []
})

export const mutations = {
  update(state, timeline) {
    state.timeline = timeline
  }
}
export const actions = {
  async getUserCareerTimeline({ commit }, userId) {
    // const url = 'http://personal-site-api.azurewebsites.net/';
    const url = 'http://localhost:61318/'
    const fullUrl = `${url}api/userinfo/${userId}/careertimeline`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
