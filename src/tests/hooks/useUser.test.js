


import { useUser } from './useUser'

describe('useUser', () => {
  test('should return user data', () => {
    const { result } = renderHook(() => useUser())

    expect(result.current.user).toEqual({
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      role: 'user',
    })
  })

  test('should update user data', () => {
    const { result } = renderHook(() => useUser())

    expect(result.current.user).toEqual({
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      role: 'user',
    })

    result.current.updateUser({
      id: 1,
      username: 'jane_doe',
      email: 'jane@example.com',
      role: 'admin',
    })

    expect(result.current.user).toEqual({
      id: 1,
      username: 'jane_doe',
      email: 'jane@example.com',
      role: 'admin',
    })
  })

  test('should reset user data', () => {
    const { result } = renderHook(() => useUser())

    expect(result.current.user).toEqual({
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      role: 'user',
    })

    result.current.resetUser()

    expect(result.current.user).toEqual(null)
  })
})

