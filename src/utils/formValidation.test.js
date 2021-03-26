import { isValidEmail } from './formValidation'

describe('isValidEmail', () => {
  test('benson_7667@hotmail.com is valid email', () => {
    const result = isValidEmail('benson_7667@hotmail.com')
    expect(result).toBe(true)
  })

  test('benson.toh@hotmail.com is valid email', () => {
    const result = isValidEmail('benson.toh@hotmail.com')
    expect(result).toBe(true)
  })

  test('benson_7667hotmail.com is invalid email', () => {
    const result = isValidEmail('benson_7667hotmail.com')
    expect(result).toBe(false)
  })

  test('benson_7667@ is invalid email', () => {
    const result = isValidEmail('benson_7667@')
    expect(result).toBe(false)
  })

  test('benson is invalid email', () => {
    const result = isValidEmail('benson')
    expect(result).toBe(false)
  })
})
