<template>
  <InputText name="email" label="Endereço de e-mail" v-model="dados.email" :error="error.email" />

  <InputRadio name="registrationType" :options="options" v-model="dados.registrationType"
    :error="error.registrationType" />

  <Button label="Continue" @click.prevent="next" />
</template>

<script>
import InputText from '../../../components/InputText.vue'
import InputRadio from '../../../components/InputRadio.vue'
import Button from '../../../components/Button.vue'
import { validateEmail } from "../../../utils/validate";

export default {
  components: {
    InputText,
    InputRadio,
    Button,
  },
  mounted() {
    this.dados.registrationType = 'PF';
  },
  props: ['dados'],
  watch: {
    'dados.email'() {
      this.error.email = ''
    }
  },
  data() {
    return {
      error: {},
      options: [
        { label: 'Pessoa física', value: 'PF', default: true },
        { label: 'Pessoa Jurídica', value: 'PJ' },
      ],
    }
  },
  emits: ['next', 'dados'],
  methods: {
    next() {
      if (!!!validateEmail(this.dados.email)) {
        this.error.email = 'Informe um email válido'
        return
      }

      if (!this.dados.registrationType) {
        this.error.registrationType = 'Informe o tipo de pessoa'
        return
      }

      this.$emit('next', this.dados)
    }
  }
}
</script>
