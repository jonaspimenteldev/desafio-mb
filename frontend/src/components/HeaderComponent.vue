<template>
  <header class="header">
    <span class="header-step">
      Etapa <span class="header-step--feat">{{ currentStep }}</span> de 4
    </span>
    <h1 class="header-text">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
