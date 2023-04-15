import { describe, expect, it, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import Registration from '@/pages/registration/Registration.vue'

describe('Registration', () => {
  it('renders the correct child components', () => {
    const pinia = createPinia()

    const wrapper = shallowMount(Registration, {
      global: {
        plugins: [pinia]
      },
      stubs: {
        component: true
      }
    })

    expect(wrapper.findComponent({ name: 'component' }).exists()).toBe(false)
  })
})
