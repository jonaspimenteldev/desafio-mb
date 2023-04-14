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
import {
  validateEmail
} from "../../../utils/helperValidate";

export default {
  mounted() {
    this.loadData();
  },
  components: {
    InputText,
    InputRadio,
    Button,
  },
  props: ['dados'],
  watch: {
    'dados.email'() {
      this.error.email = ''
    }
  },
  data() {
    return {
      step: 1,
      error: {
        email: '',
        registrationType: ''
      },
      options: [
        { label: 'Pessoa física', value: 'PF', default: true },
        { label: 'Pessoa Jurídica', value: 'PJ' },
      ],
    }
  },
  emits: ['next', 'dados'],
  methods: {
    loadData() {
      if (!this.dados.registrationType) this.dados.registrationType = 'PF';
      this.dados.name = '';
    },

    handleRadioChange($event) {
      this.dados.registrationType = $event.target.value
    },

    next() {
      if (!!!validateEmail(this.dados.email)) {
        this.error.email = 'Informe um email válido'
        return
      }

      this.$emit('next', this.dados)
    }
  }
}
</script>
