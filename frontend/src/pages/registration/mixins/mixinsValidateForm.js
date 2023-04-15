import {
  validateCpf,
  validateCnpj,
  validateMinimumSize,
  validateEmail
} from '../../../utils/validate'

export default {
  methods: {
    validateForm() {
      if (!this.form.email || !validateEmail(this.form.email)) {
        this.error.email = 'Informe um email válido'
        return false
      }

      if (!this.form.name) {
        this.error.name = 'Informe um nome'
        return false
      }

      if (this.form.registrationType === 'PJ') {
        if (!this.form.company.cnpj || !validateCnpj(this.form.company.cnpj)) {
          this.error.cnpj = 'Informe um CNPJ válido'
          return false
        }

        if (!this.form.company.openingDate) {
          this.error.openingDate = 'Informe a data de abertura'
          return false
        }
      }

      if (this.form.registrationType === 'PF') {
        if (!this.form.cpf || !validateCpf(this.form.cpf)) {
          this.error.cpf = 'Informe um CPF válido'
          return false
        }

        if (!this.form.birthDate) {
          this.error.birthDate = 'Informe a data de nascimento'
          return false
        }
      }

      if (!this.form.phone || !validateMinimumSize(this.form.phone, 11)) {
        this.error.phone = 'Informe um telefone válido'
        return false
      }

      if (!this.form.password) {
        this.error.password = 'Informe uma senha'
        return false
      }

      return true
    }
  }
}
