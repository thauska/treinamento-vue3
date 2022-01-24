export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(value)

  if (!isValid) {
    return '*Digite um email válido'
  }

  return true
}
