import { COPIED_VALUE, COPY_VALUE } from 'constants/formConstants'
import { useRef, useState } from 'react'
import passwordGenerator from 'utils/passwordGenerator'

const Form = () => {
  const [characterLength, setCharacterLength] = useState(10)
  const [optionUppercase, setOptionUppercase] = useState(false)
  const [optionNumber, setOptionNumber] = useState(false)
  const [optionSymbol, setOptionSymbol] = useState(false)
  const [copyBtnText, setCopyBtnTxt] = useState(COPY_VALUE)
  const [randomPassword, setRandomPassword] = useState('')
  const copy = useRef(null) as any
  const min = 1
  const max = 50

  const onCharacterChange = (e: any) => {
    if (e.target.value >= 0 && e.target.value <= max) {
      setCharacterLength(e.target.value)
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    setCopyBtnTxt(COPY_VALUE)

    const getPassword = passwordGenerator(
      characterLength,
      optionUppercase,
      optionNumber,
      optionSymbol
    )

    setRandomPassword(getPassword)
  }

  const onCopyToClipboard = () => {
    const copyValue = copy.current!.innerHTML.toString()
    navigator.clipboard
      .writeText(copyValue)
      .then(function () {
        setCopyBtnTxt(COPIED_VALUE) // success
      })
      .catch(function () {
        alert('An error occured while copying') // error
      })
  }

  return (
    <div className='container'>
      <div className='form-title'>Password Generator</div>
      <div className='password-container'>
        <div className='password-display' ref={copy}>
          {randomPassword}
        </div>
        <button
          className='copy-btn'
          type='button'
          onClick={onCopyToClipboard}
          disabled={randomPassword.length === 0}
        >
          {copyBtnText}
        </button>
      </div>

      <form className='form' onSubmit={onSubmit}>
        <label htmlFor='characterAmountForNumber'>Password length</label>
        <div className='character-amount-container'>
          <input
            id='characterAmountForRange'
            type='range'
            value={characterLength}
            min={min}
            max={max}
            onChange={onCharacterChange}
          />
          <input
            id='characterAmountForNumber'
            className='input-number'
            type='number'
            min={min}
            max={max}
            value={characterLength}
            onChange={onCharacterChange}
          />
        </div>

        <label htmlFor='checkUpperCase'>Include Uppercase</label>
        <input
          id='checkUpperCase'
          type='checkbox'
          onChange={(e) => setOptionUppercase(e.target.checked)}
        />

        <label htmlFor='checkNumbers'>Include Numbers</label>
        <input
          id='checkNumbers'
          type='checkbox'
          onChange={(e) => setOptionNumber(e.target.checked)}
        />

        <label htmlFor='checkSymbols'>Include Symbols</label>
        <input
          id='checkSymbols'
          type='checkbox'
          onChange={(e) => setOptionSymbol(e.target.checked)}
        />

        <button className='form-btn' type='submit'>
          Generate Password
        </button>
      </form>
    </div>
  )
}

export default Form
