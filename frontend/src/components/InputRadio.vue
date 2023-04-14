<template>
  <div class="form-radio">
    <label class="form-radio__label" v-for="(option, index) in options" :key="index">
      <input class="form-radio__input" type="radio" :name="name" :value="option.value" @input="handleChange">
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event);
    }
  }
}
</script>