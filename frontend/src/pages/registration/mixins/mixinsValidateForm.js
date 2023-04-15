import {
  validateCpf,
  validateCnpj,
  validateMinimumSize,
  validateEmail
} from '../../../utils/validate'

export default {
  methods: {
    validateForm() {
      if (!this.dados.email || !validateEmail(this.dados.email)) {
        this.error.email = 'Informe um email válido'
        return false
      }

      if (!this.dados.name) {
        this.error.name = 'Informe um nome'
        return false
      }

      if (this.dados.registrationType === 'PJ') {
        if (!this.dados.company.cnpj || !validateCnpj(this.dados.company.cnpj)) {
          this.error.cnpj = 'Informe um CNPJ válido'
          return false
        }

        if (!this.dados.company.openingDate) {
          this.error.openingDate = 'Informe a data de abertura'
          return false
        }
      }

      if (this.dados.registrationType === 'PF') {
        if (!this.dados.cpf || !validateCpf(this.dados.cpf)) {
          this.error.cpf = 'Informe um CPF válido'
          return false
        }

        if (!this.dados.birthDate) {
          this.error.birthDate = 'Informe a data de nascimento'
          return false
        }
      }

      if (!this.dados.phone || !validateMinimumSize(this.dados.phone, 11)) {
        this.error.phone = 'Informe um telefone válido'
        return false
      }

      if (!this.dados.password) {
        this.error.password = 'Informe uma senha'
        return false
      }

      return true
    }
  }
}
