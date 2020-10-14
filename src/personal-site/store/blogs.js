export const state = () => ({
  blogs: [],
  articles: []
})

export const mutations = {
  update(state, blogs) {
    state.blogs = blogs
  },
  updateArticles(state, articles) {
    state.articles = articles
  }
}
export const actions = {
  async getUserBlogs({ commit }, userId) {
    const fullUrl = `/api/user/${userId}/blogs`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  },
  async getUserArticles({ commit }, userId) {
    const fullUrl = `/api/user/${userId}/articles`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('updateArticles', result.data)
    }
  }
}
