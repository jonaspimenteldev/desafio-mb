<template>
  <!-- <pre>  {{ steps }}</pre> -->
  <div class="container">
    <form class="form">
      <Header :currentStep="currentStep" :title="currentTitle()" />
      <StepOne v-if="step === 1" :dados="user" @next="next" />
      <StepTwo v-if="step === 2" :dados="user" @next="next" @back="back" />
      <StepThree v-if="step === 3" :dados="user" @next="next" @back="back" />
      <StepFour v-if="step === 4" :dados="user" @next="next" @back="back" />
      <Resume v-if="step === 5" :dados="user" @back="back" />
    </form>
  </div>
</template>
<script>
import { mapState, mapWritableState } from 'pinia'
import { useRegistrationStore } from '../../store/registration'

/* Components */
import Header from '../../components/Header.vue'
import StepOne from './steps/StepOne.vue'
import StepTwo from './steps/StepTwo.vue'
import StepThree from './steps/StepThree.vue'
import StepFour from './steps/StepFour.vue'
import Resume from './steps/StepFive.vue'

export default {
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    Resume,
  },
  computed: {
    ...mapState(useRegistrationStore, ['steps']),

    ...mapWritableState(useRegistrationStore, ['user']),

    currentStep() {
      if (this.step === 2 || this.step === 3) return 2
      if (this.step === 4) return 3
      if (this.step === 5) return 4
      if (this.step) return this.step
    },
  },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Seja bem vindo(a)"
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
          this.user.registrationType === 'PF' ? this.step = 2 : this.step = 3
          break
        case 2:
          this.step = 4
          break
        case 3:
          this.step = 4
          break
        case 4:
          this.step = 5
        case 5:
          break
      }
    },
    back() {
      if (this.user.registrationType === 'PJ' && this.step === 3) {
        this.step = 1
        return
      }

      if (this.step === 4 && this.user.registrationType === 'PF') {
        this.step = 2
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