<template>
  <div class="form-radio">
    <label class="form-radio__label" v-for="(option, index) in options" :key="index">
      <input class="form-radio__input" type="radio" :checked="modelValue === option.value" :name="name"
        :value="option.value" @input="handleChange">
      {{ option.label }}
    </label>
    <div v-if="error" class="form-error__text">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue", 'name', 'options', 'error'],
  emits: ['update:modelValue'],
  methods: {
    handleChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>