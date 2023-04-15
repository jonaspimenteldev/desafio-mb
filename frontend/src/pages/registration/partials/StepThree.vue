<template>
  <InputText id="name" name="name" label="Nome" v-model="form.name" :error="error.name" />

  <InputText id="cnpj" name="cnpj" label="CNPJ" mask="XX.XXX.XXX/XXXX-XX" v-model="form.company.cnpj"
    :error="error.cnpj" />

  <InputText id="openingDate" name="openingDate" type="date" label="Data de abertura" v-model="form.company.openingDate"
    :error="error.openingDate" />

  <InputText id="phone" name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="form.phone" :error="error.phone" />

  <GroupButton>
    <ButtonComponent label="Voltar" :outline="true" :half="true" @click.prevent="back" />
    <ButtonComponent label="Continue" :half="true" @click.prevent="next" />
  </GroupButton>
</template>

<script>
import { validateCnpj, validateMinimumSize } from '../../../utils/validate'

import InputText from '@/components/InputText.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import GroupButton from '../../../components/GroupButton.vue'

export default {
  components: {
    InputText,
    GroupButton,
    ButtonComponent
  },
  props: ['dados'],
  watch: {
    'form.name'() {
      this.error.name = ''
    },
    'form.company.cnpj'() {
      this.error.cnpj = ''
    },
    'form.company.openingDate'() {
      this.error.openingDate = ''
    },
    'form.phone'() {
      this.error.phone = ''
    }
  },
  mounted() {
    this.form = this.dados;
  },
  data() {
    return {
      form: {
        company: {}
      },
      error: {}
    }
  },
  emits: ['next', 'back', 'dados'],
  methods: {
    next() {
      if (!this.form.name) {
        this.error.name = 'Informe uma razão social'
        return
      }

      if (!this.form.company.cnpj || !validateCnpj(this.form.company.cnpj)) {
        this.error.cnpj = 'Informe um CNPJ válido'
        return
      }

      if (!this.form.company.openingDate) {
        this.error.openingDate = 'Informe a data de abertura'
        return
      }

      if (!this.form.phone || !validateMinimumSize(this.form.phone, 11)) {
        this.error.phone = 'Informe um telefone válido'
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
