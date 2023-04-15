<template>
  <div class="container">
    <form class="form">
      <HeaderComponent :currentStep="currentStep" :title="currentTitle" />
      <Component v-if="step in this.stepsConfig" :is="stepsConfig[step].component" :dados="user" @next="next"
        @back="back" />
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useRegistrationStore } from '@/stores/registration'

/* Components */
import HeaderComponent from '@/components/HeaderComponent.vue'
import StepOne from './partials/StepOne.vue'
import StepTwo from './partials/StepTwo.vue'
import StepThree from './partials/StepThree.vue'
import StepFour from './partials/StepFour.vue'
import Resume from './partials/StepFive.vue'


export default {
  emits: ['back', 'next'],
  components: {
    HeaderComponent,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    Resume
  },
  computed: {
    ...mapState(useRegistrationStore, ['steps', 'user']),

    currentStep() {
      const currentStepConfig = this.stepsConfig[this.step];
      return currentStepConfig.currentStep || this.step;
    },

    currentTitle() {
      const currentStepConfig = this.stepsConfig[this.step];
      return currentStepConfig.title || '';
    },
  },

  data() {
    return {
      step: 1,
      stepsConfig: {
        1: {
          currentStep: 1,
          component: 'StepOne',
          title: 'Seja bem-vindo(a)',
          nextStep: (user) => (user.registrationType === 'PF' ? 2 : 3)
        },
        2: {
          currentStep: 2,
          component: 'StepTwo',
          title: 'Pessoa física',
          nextStep: () => 4
        },
        3: {
          currentStep: 2,
          component: 'StepThree',
          title: 'Pessoa jurídica',
          nextStep: () => 4
        },
        4: {
          currentStep: 3,
          component: 'StepFour',
          title: 'Senha de acesso',
          nextStep: () => 5
        },
        5: {
          currentStep: 4,
          component: 'Resume',
          title: 'Revise suas informações',
        }
      }
    }
  },

  methods: {
    ...mapActions(useRegistrationStore, ['updateUser']),

    next(form) {
      this.updateUser(form);
      const currentStepConfig = this.stepsConfig[this.step];
      if (currentStepConfig.nextStep) {
        this.step = currentStepConfig.nextStep(this.user);
      }
    },

    back() {
      if (this.user.registrationType === 'PJ' && this.step === 3) {
        this.step = 1
      } else if (this.step === 4 && this.user.registrationType === 'PF') {
        this.step = 2
      } else {
        this.step -= 1
      }
    }
  }
}
</script>
