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
    const fullUrl = `/api/user/${userId}/careertimeline`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
