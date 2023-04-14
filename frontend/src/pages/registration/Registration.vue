<template>
  <div class="container">
    <form class="form">
      <StepOne v-if="step === 1" :dados="dataStepOne" @next="next" />
      <StepTwo v-if="step === 2" :dados="dataStepTwo" @next="next" @back="back" />
      <StepThree v-if="step === 3" :dados="dataStepThree" @next="next" @back="back" />
      <StepFour v-if="step === 4" :dados="dataStepFour" @next="next" @back="back" />
      <StepFive v-if="step === 5" :dados="dataStepFive" @send="submit" @back="back" />
      <button v-if="step > 1" @click="back">Back</button>
    </form>
  </div>
</template>
  
<script>
import StepOne from './partials/Step01.vue'
import StepTwo from './partials/Step02.vue'
import StepThree from './partials/Step03.vue'
import StepFour from './partials/Step04.vue'
import StepFive from './partials/Step05.vue'

export default {
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
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
    next(dados) {
      switch (this.step) {
        case 1:
          this.dataStepOne = dados
          this.step = 2
          break
        case 2:
          this.dataStepTwo = dados
          this.step = 3
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