export const state = () => ({
  platforms: []
})

export const mutations = {
  update (state, platforms) {
    state.platforms = platforms
  }
}
export const actions = {
  async getPlatformVideos ({ commit }, userId) {
    const url = 'http://personal-site-api.azurewebsites.net/'
    const fullUrl = `${url}api/userinfo/${userId}/videos`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}
