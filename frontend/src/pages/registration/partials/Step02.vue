<template>
  <InputText name="name" label="Nome" v-model="dados.name" :error="error.name" />
  <InputText name="cpf" label="CPF" mask="XXX.XXX.XXX-XX" v-model="dados.cpf" :error="error.cpf" />
  <InputText name="birthDate" type="date" label="Data de nascimento" v-model="dados.birthDate" :error="error.birthDate" />
  <InputText name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="dados.phone" :error="error.phone" />
  <GroupButton>
    <Button label="Voltar" :outline="true" :half="true" @click.prevent="back" />
    <Button label="Continue" :half="true" @click.prevent="next" />
  </GroupButton>
</template>

<script>
import InputText from '../../../components/InputText.vue'
import InputRadio from '../../../components/InputRadio.vue'
import Button from '../../../components/Button.vue'
import GroupButton from '../../../components/GroupButton.vue'
import {
  validateCpf,
  validateMinimumSize,
} from "../../../utils/helperValidate";

export default {
  components: {
    InputText,
    InputRadio,
    GroupButton,
    Button,
  },
  props: ['dados'],
  watch: {
    'dados.name'() {
      this.error.name = ''
    },
    'dados.cpf'() {
      this.error.cpf = ''
    },
    'dados.birthDate'() {
      this.error.birthDate = ''
    },
    'dados.phone'() {
      this.error.phone = ''
    }
  },
  data() {
    return {
      step: 2,
      error: {
        name: '',
        cpf: '',
        birthDate: '',
        phone: '',
      },
    }
  },
  emits: ['next', 'back', 'dados'],
  methods: {
    next() {
      if (!this.dados.name) {
        this.error.name = 'Informe um nome'
        return
      }

      if (!this.dados.cpf || !!!validateCpf(this.dados.cpf)) {
        this.error.cpf = 'Informe um CPF válido'
        return
      }

      if (!this.dados.birthDate) {
        this.error.birthDate = 'Informe a data de nascimento'
        return
      }

      if (!this.dados.phone || !!!validateMinimumSize(this.dados.phone, 11)) {
        this.error.phone = 'Informe um telefone válido'
        return
      }

      this.$emit('next', this.dados)
    },

    back() {
      this.$emit('back')
    }
  }
}
</script>
