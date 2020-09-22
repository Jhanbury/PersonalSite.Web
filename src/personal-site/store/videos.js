export const state = () => ({
  platforms: [],
  stream: {
    url: null,
    platform: null,
    isLive: false
  }
})

export const mutations = {
  update (state, platforms) {
    state.platforms = platforms
  },
  updateStream (state, stream) {
    if (stream == null) {
      state.stream = {
        url: null,
        platform: null,
        isLive: false
      }
    } else {
      state.stream = stream
    }
  }
}
export const actions = {
  async getPlatformVideos ({ commit }, userId) {
    const fullUrl = `/api/user/${userId}/videos`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  },
  async getStreamInfo ({ commit }, userId) {
    const fullUrl = `/api/user/${userId}/livestreams`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('updateStream', result.data)
    }
  }
}
