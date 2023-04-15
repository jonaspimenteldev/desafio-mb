import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRegistrationStore } from '../stores/registration'

describe('Registration Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('receive value PF', () => {
    const store = useRegistrationStore()
    expect(store.user.registrationType).toEqual('PF')
  })
})
