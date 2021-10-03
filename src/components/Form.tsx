import React, { useState } from 'react'

const Form = () => {
  const [characterLength, setCharacterLength] = useState(10)

  const onCharacterChange = (e: any) => {
    setCharacterLength(e.target.value)
  }

  return (
    <div className='container'>
      <div className='form-title'>Password Generator</div>
      <div className="password-display">Passworasdddddddddddddddddddddddddddddddddddddddddddddddd</div>
      <form className='form'>
        <label htmlFor='characterAmountForNumber'>Password length</label>
        <div className="characterAmountContainer">
          <input
            id='characterAmountForRange'
            type='range'
            value={characterLength}
            min={1}
            max={50}
            onChange={onCharacterChange}
          />
          <input
          className="input-number"
            id='characterAmountForNumber'
            type='number'
            min={1}
            max={50}
            value={characterLength}
            onChange={onCharacterChange}
          />
        </div>

        <label htmlFor='checkUpperCase'>Include Uppercase</label>
        <input id='checkUpperCase' type='checkbox' />

        <label htmlFor='checkNumbers'>Include Numbers</label>
        <input id='checkNumbers' type='checkbox' />

        <label htmlFor='checkSymbols'>Include Symbols</label>
        <input id='checkSymbols' type='checkbox' />

        <button className="form-btn" type='submit'>Generate Password</button>
      </form>
    </div>
  )
}

export default Form
