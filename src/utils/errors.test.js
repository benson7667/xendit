import { getAuthErrMsg } from './errors'

describe('getAuthErrMsg', () => {
  test('should return empty string if parameter is not object', () => {
    const msg = getAuthErrMsg('')
    expect(msg).toBe('')
  })

  test('should return empty string error code is not found', () => {
    const msg = getAuthErrMsg('auth/foo_bar')
    expect(msg).toBe('')
  })

  test('should correct error message mapping', () => {
    const authError = {
      code: 'auth/user-not-found',
      message: 'xxx',
    }
    const msg = getAuthErrMsg(authError)
    expect(msg).toBe('Invalid email or password')
  })
})
