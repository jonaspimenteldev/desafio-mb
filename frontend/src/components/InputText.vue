<template>
  <div class="form-input">
    <label class="form-input__label" :for="label">{{ label }}</label>
    <template v-if="mask">
      <input :id="id" :placeholder="placeholder" :type="type" @blur="blur" :class="{ 'form-error__border': error }"
        class="form-input__input" v-bind:value="modelValue" v-on:input="updateModel" v-mascara="mask" />
    </template>
    <template v-else>
      <input :id="id" :placeholder="placeholder" :type="type" @blur="blur" :class="{ 'form-error__border': error }"
        class="form-input__input" v-bind:value="modelValue" v-on:input="updateModel" />
    </template>
    <div v-if="error" class="form-error__text">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: ['modelValue', 'mask', 'label', 'name', 'error', 'placeholder', 'type', 'id'],
  emits: ['blur', 'update:modelValue'],
  methods: {
    blur() {
      this.$emit('blur')
    },
    updateModel($event) {
      this.$emit('update:modelValue', $event.target.value)
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
