export const state = () => ({
  blogs: []
})

export const mutations = {
  update (state, blogs) {
    state.blogs = blogs
  }
}
export const actions = {
  async getUserBlogs ({ commit }, userId) {
    const fullUrl = `api/userinfo/${userId}/blogposts`
    const result = await this.$axios.get(fullUrl)
    if (result) {
      commit('update', result.data)
    }
  }
}