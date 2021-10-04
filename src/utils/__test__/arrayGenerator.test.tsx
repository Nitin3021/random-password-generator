import arrayFromLowToHigh from 'utils/arrayGenerator'

it('returns an empty array if no parameters are passed', () => {
  const characterCodes = arrayFromLowToHigh()

  expect(characterCodes).toHaveLength(0)
})

it('generates an array from the provided low and high range', () => {
  const characterCodes = arrayFromLowToHigh(65, 70)

  expect(characterCodes).toHaveLength(6)
  expect(characterCodes).not.toContain(64)
  expect(characterCodes).toContain(65)
  expect(characterCodes).toContain(66)
  expect(characterCodes).toContain(67)
  expect(characterCodes).toContain(68)
  expect(characterCodes).toContain(69)
  expect(characterCodes).toContain(70)
  expect(characterCodes).not.toContain(71)
})
