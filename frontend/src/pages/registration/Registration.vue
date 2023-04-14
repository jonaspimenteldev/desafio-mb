<template>
  <div class="container">
    <form class="form">
      <Header :currentStep="currentStep" :title="currentTitle()" />
      <StepOne v-if="step === 1" :dados="dataStepOne" @next="next" />
      <StepTwo v-if="step === 2" :dados="dataStepTwo" @next="next" @back="back" />
      <StepThree v-if="step === 3" :dados="dataStepThree" @next="next" @back="back" />
      <StepFour v-if="step === 4" :dados="dataStepFour" @next="next" @back="back" />
      <StepFive v-if="step === 5" :dados="dataStepFive" :registrationType="this.dataStepOne.registrationType"
        @send="submit" @back="back" />
    </form>
    {{ groupdata }}
  </div>
</template>
  
<script>
import Header from '../../components/Header.vue'
import StepOne from './partials/Step01.vue'
import StepTwo from './partials/Step02.vue'
import StepThree from './partials/Step03.vue'
import StepFour from './partials/Step04.vue'
import StepFive from './partials/Step05.vue'

export default {
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
  },
  computed: {
    currentStep() {
      if (this.step === 2 || this.step === 3) return 2
      if (this.step === 4) return 3
      if (this.step) return this.step
    },
    createSubmitForm() {
      if (this.dataStepOne.registrationType === 'PF') {
        return this.form = {
          ...this.dataStepOne,
          ...this.dataStepTwo,
          ...this.dataStepFour,
        }
      } else {
        return this.form = {
          ...this.dataStepOne,
          ...this.dataStepThree,
          ...this.dataStepFour,
        }
      }

    }
  },
  data() {
    return {
      step: 1,
      dataStepOne: {},
      dataStepTwo: {},
      dataStepThree: {},
      dataStepFour: {},
      dataStepFive: {},
      form: {}
    }
  },

  methods: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sejam bem vindo(a)"
        case 2:
          return "Pessoa física"
        case 3:
          return "Pessoa jurídica"
        case 4:
          return "Senha de acesso"
        case 5:
          return "Revise suas informações"
      }
    },
    next(dados) {
      switch (this.step) {
        case 1:
          this.dataStepOne = dados
          this.dataStepOne.registrationType === 'PF' ? this.step = 2 : this.step = 3
          break
        case 2:
          this.dataStepTwo = dados
          this.step = 4
          break
        case 3:
          this.dataStepThree = dados
          this.step = 4
          break
        case 4:
          this.dadosStepFour = dados
          this.step = 5
        case 5:
          this.dadosStepFive = dados
          break
      }
    },
    back() {
      if (this.dataStepOne.registrationType === 'PJ' && this.step === 3) {
        this.step = 1
        return
      }

      this.step -= 1
    },
    submit() {
      this.form = {
        ...this.dataStepOne,
        ...this.dataStepTwo
      }
    }
  }
}
</script>
  
<style lang="scss"></style>