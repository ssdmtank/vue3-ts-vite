import { defineStore } from 'pinia'

interface LoginState {
  name: string
}

export const useLoginStore = defineStore({
  id: 'login',
  state: (): LoginState => ({
    name: '管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
  },
})
