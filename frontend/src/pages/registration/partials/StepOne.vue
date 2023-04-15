<template>
  <InputText id="email" name="email" label="Endereço de e-mail" v-model="form.email" :error="error.email" />

  <InputRadio id="registrationType" name="registrationType" :options="options" v-model="form.registrationType"
    :error="error.registrationType" />

  <ButtonComponent label="Continue" @click.prevent="next">
    Continuar
  </ButtonComponent>
</template>

<script>
import InputText from '@/components/InputText.vue'
import InputRadio from '@/components/InputRadio.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { validateEmail } from '../../../utils/validate'

export default {
  components: {
    InputText,
    InputRadio,
    ButtonComponent
  },
  mounted() {
    this.form = this.dados
  },
  props: ['dados'],
  watch: {
    'form.email'() {
      this.error.email = ''
    }
  },
  data() {
    return {
      form: {
        email: ''
      },
      error: {},
      options: [
        { label: 'Pessoa física', value: 'PF' },
        { label: 'Pessoa jurídica', value: 'PJ' }
      ]
    }
  },
  emits: ['next', 'dados', 'back'],
  methods: {
    validateForm() {
      if (!validateEmail(this.form.email)) {
        this.error.email = 'Informe um e-mail válido'
        return false
      }

      if (!this.form.registrationType) {
        this.error.registrationType = 'Informe o tipo de pessoa'
        return false
      }

      return true
    },

    next() {
      if (!this.validateForm()) {
        return
      }

      this.$emit('next', this.form)
    }
  }
}
</script>
