import {
  validateEmptyAndLength3,
  validateEmptyAndEmail
} from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 characters payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndLength3('teste')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Digite um email válido')
  })

  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndEmail('myemail@email.com')).toBe(true)
  })
})
