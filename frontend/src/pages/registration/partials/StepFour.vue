<template>
  <InputText id="password" name="password" label="Sua Senha" v-model="form.password" :error="error.password" />

  <GroupButton>
    <ButtonComponent label="Voltar" :outline="true" :half="true" @click.prevent="back" />
    <ButtonComponent label="Continue" :half="true" @click.prevent="next" />
  </GroupButton>
</template>

<script>
import InputText from '@/components/InputText.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import GroupButton from '@/components/GroupButton.vue'

export default {
  mounted() {
    this.form = this.dados;
  },
  components: {
    InputText,
    GroupButton,
    ButtonComponent
  },
  props: ['dados'],
  watch: {
    'form.password'() {
      this.error.password = ''
    }
  },
  data() {
    return {
      form: {},
      error: {
        password: ''
      }
    }
  },
  emits: ['next', 'back', 'dados'],
  methods: {
    next() {
      if (!this.form.password) {
        this.error.password = 'Informe uma senha'
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
