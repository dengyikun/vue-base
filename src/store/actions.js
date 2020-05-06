import { login } from '@/api'

export default {
  login: ({ commit }, payload) => {
    login(payload)
  }
}
