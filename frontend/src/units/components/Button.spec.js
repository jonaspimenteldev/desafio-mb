import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from '../../components/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonComponent, { props: { label: 'Continuar' } })
    expect(wrapper.text()).toContain('Continuar')
  })
})
