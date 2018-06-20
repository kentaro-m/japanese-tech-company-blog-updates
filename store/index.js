import axios from 'axios'
import moment from 'moment'

export const state = () => ({
  list: []
})

export const mutations = {
  setList (state, data) {
    state.list = data
  }
}

export const actions = {
  async getList ({ commit }) {
    try {
      const options = {
        method: 'get',
        url: process.env.apiUrl,
        params: {
          startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD')
        }
      }

      const response = await axios(options)

      commit('setList', response.data.results)
    } catch (error) {
      throw error
    }
  }
}
