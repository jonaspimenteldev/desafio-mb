import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('HeaderComponent', () => {
  it('renders the correct title and current step', () => {
    const currentStep = 2
    const title = 'Teste'
    const wrapper = mount(Header, {
      props: {
        currentStep,
        title
      }
    })

    expect(wrapper.find('.header-step--feat').text()).toBe(currentStep.toString())
    expect(wrapper.find('.header-text').text()).toBe(title)
  })
})
