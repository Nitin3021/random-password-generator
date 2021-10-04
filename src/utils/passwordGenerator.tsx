import arrayFromLowToHigh from './arrayGenerator'

const passwordGenerator = (
  characterLength: number = 0,
  optionUppercase: boolean = false,
  optionNumber: boolean = false,
  optionSymbol: boolean = false
) => {
  //Character codes from standard ASCII table
  const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
  const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
  const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
  const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126))

  let charCodes = LOWERCASE_CHAR_CODES
  if (optionUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (optionNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (optionSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  let randomPassword = []
  for (let i = 0; i < characterLength; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)]
    randomPassword.push(String.fromCharCode(characterCode))
  }

  return randomPassword.join('')
}

export default passwordGenerator
