import useStore from '@/hooks/useStore'

import {
  clearCurrentUser,
  resetUserStore,
  setApiKey,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })
  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Thayana' })
    expect(store.User.currentUser.name).toBe('Thayana')
  })

  it('should set api_key on current user', () => {
    const store = useStore()
    setApiKey('1234')
    expect(store.User.currentUser.apiKey).toBe('1234')
  })

  it('should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Thayana' })
    expect(store.User.currentUser.name).toBe('Thayana')
    clearCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
