import passwordGenerator from '../passwordGenerator'

it('returns an empty array if no parameters are passed', () => {
  const randomPassword = passwordGenerator()

  expect(randomPassword).toHaveLength(0)
})

it('returns a password of specific length as per defined parameters', () => {
  const characterLength = 41
  const optionUppercase = true
  const optionNumber = false
  const optionSymbol = true

  const randomPassword = passwordGenerator(
    characterLength,
    optionUppercase,
    optionNumber,
    optionSymbol
  )

  expect(randomPassword).toHaveLength(characterLength)
  expect(randomPassword).not.toContain(/0-9/)
})
