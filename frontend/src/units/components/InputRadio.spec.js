import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputRadio from '@/components/InputRadio.vue'

const createWrapper = (propsData = {}) => {
  return mount(InputRadio, {
    propsData: {
      modelValue: '',
      name: 'radio-input',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      error: '',
      ...propsData
    }
  })
}

describe('RadioInput', () => {
  it('renders options correctly', () => {
    const wrapper = createWrapper()

    const options = wrapper.findAll('input[type="radio"]')
    expect(options.length).toBe(3)
    expect(options.at(0).attributes('value')).toBe('option1')
    expect(options.at(1).attributes('value')).toBe('option2')
    expect(options.at(2).attributes('value')).toBe('option3')

    const labels = wrapper.findAll('.form-radio__label')
    expect(labels.length).toBe(3)
    expect(labels.at(0).text()).toBe('Option 1')
    expect(labels.at(1).text()).toBe('Option 2')
    expect(labels.at(2).text()).toBe('Option 3')
  })

  it('emits update:modelValue event on input change', async () => {
    const wrapper = createWrapper({ modelValue: 'option1' })
    await wrapper.findAll('input')[1].trigger('click')
  })

  it('displays error message when error prop is set', () => {
    const wrapper = createWrapper({ error: 'Invalid input' })
    expect(wrapper.find('.form-error__text').exists()).toBe(true)
    expect(wrapper.find('.form-error__text').text()).toBe('Invalid input')
  })
})
