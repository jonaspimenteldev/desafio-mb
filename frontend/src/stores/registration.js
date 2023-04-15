import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    user: {
      email: '',
      registrationType: 'PF',
      password: '',
      name: '',
      phone: '',
      cpf: '',
      birthDate: '',
      company: {
        cnpj: '',
        openingDate: ''
      }
    }
  }),
  actions: {
    updateUser(payload) {
      this.$patch({
        user: Object.assign(this.$state.user, payload)
      })
    }
  }
})
