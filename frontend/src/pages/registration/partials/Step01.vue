<template>
  <InputText name="email" label="Endereço de e-mail" v-model="dados.email" />
  <InputRadio name="registrationType" v-model="dados.registrationType" :options="options" @change="handleRadioChange" />
</template>

<script>
import InputText from '../../../components/InputText.vue'
import InputRadio from '../../../components/InputRadio.vue'

export default {
  components: {
    InputText,
    InputRadio
  },
  props: {
    dados: Object
  },
  data() {
    return {
      step: 1,
      options: [
        { label: 'Pessoa física', value: 'PF' },
        { label: 'Pessoa Jurídica', value: 'PJ' },
      ],
    }
  },
  methods: {
    handleRadioChange($event) {
      this.dados.registrationType = $event.target.value
    },
    next() {
      this.$emit('next', this.dados)
    }
  }
}
</script>
