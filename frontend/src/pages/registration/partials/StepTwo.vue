<template>
  <InputText id="name" name="name" label="Nome" v-model="form.name" :error="error.name" />

  <InputText id="cpf" name="cpf" label="CPF" mask="XXX.XXX.XXX-XX" v-model="form.cpf" :error="error.cpf" />

  <InputText id="birthDate" name="birthDate" type="date" label="Data de nascimento" v-model="form.birthDate"
    :error="error.birthDate" />

  <InputText id="phone" name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="form.phone" :error="error.phone" />

  <GroupButton>
    <ButtonComponent label="Voltar" :outline="true" :half="true" @click.prevent="back" />

    <ButtonComponent label="Continue" :half="true" @click.prevent="next" />
  </GroupButton>
</template>

<script>
import InputText from '@/components/InputText.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import GroupButton from '@/components/GroupButton.vue'
import { validateCpf, validateMinimumSize } from '../../../utils/validate'

export default {
  components: {
    InputText,
    GroupButton,
    ButtonComponent
  },
  mounted() {
    this.form = this.dados;
  },
  props: ['dados'],
  watch: {
    'form.name'() {
      this.error.name = ''
    },
    'form.cpf'() {
      this.error.cpf = ''
    },
    'form.birthDate'() {
      this.error.birthDate = ''
    },
    'form.phone'() {
      this.error.phone = ''
    }
  },
  data() {
    return {
      form: {},
      error: {}
    }
  },
  emits: ['next', 'back', 'dados'],
  methods: {
    validateForm() {
      if (!this.form.name) {
        this.error.name = 'Informe um nome'
        return
      }

      if (!this.form.cpf || !validateCpf(this.form.cpf)) {
        this.error.cpf = 'Informe um CPF válido'
        return
      }

      if (!this.form.birthDate) {
        this.error.birthDate = 'Informe a data de nascimento'
        return
      }

      if (!this.form.phone || !validateMinimumSize(this.form.phone, 11)) {
        this.error.phone = 'Informe um telefone válido'
        return
      }


      return true
    },

    next() {
      if (!this.validateForm()) {
        return
      }

      this.$emit('next', this.form)
    },

    back() {
      this.$emit('back')
    }
  }
}
</script>
