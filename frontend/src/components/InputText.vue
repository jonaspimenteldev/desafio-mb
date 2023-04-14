<template>
  <div :id="name" class="mb-input">
    <label class="mb-input__label" :for="label">{{ label }}</label>
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>
  
<script>
export default {
  name: "InputText",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__input {
    display: flex;
    flex-direction: column;
  }
}
</style>