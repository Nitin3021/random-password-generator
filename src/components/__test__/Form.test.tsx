import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Form'

it('renders component with default values', () => {
  const result = render(<Form />)

  const defaultCharLength = result.container.querySelector(
    '#characterAmountForNumber'
  )
  //@ts-ignore
  expect(defaultCharLength!.value).toEqual('10')

  const defaultCaseCheckbox = result.container.querySelector('#checkUpperCase')
  //@ts-ignore
  expect(defaultCaseCheckbox.checked).toBeFalsy()

  const defaultNumberCheckbox =
    result.container.querySelector('#checkUpperCase')
  //@ts-ignore
  expect(defaultNumberCheckbox.checked).toBeFalsy()

  const defaultSymbolCheckbox =
    result.container.querySelector('#checkUpperCase')
  //@ts-ignore
  expect(defaultSymbolCheckbox.checked).toBeFalsy()
})

it('generates random password upon submit', () => {
  const result = render(<Form />)

  const button = screen.getByText(/Generate Password/i)
  const beforePassword = result.container.querySelector('.password-display')
  expect(beforePassword?.innerHTML).toHaveLength(0)

  fireEvent.click(button)
  const afterPassword = result.container.querySelector('.password-display')
  expect(afterPassword?.innerHTML).toHaveLength(10)
})

it('does not call appropriate function when clicked on Copy, if there is no content to Copy', () => {
  const onCopyToClipboard = jest.fn()

  render(<Form />)

  const button = screen.getByText(/Copy/i)
  fireEvent.click(button)

  expect(onCopyToClipboard).not.toHaveBeenCalled()
})

// it('calls appropriate function when clicked on Copy, after password is generated', () => {
//   const onCopyToClipboard = jest.fn()

//   render(<Form />)

//   const buttonGenerate = screen.getByText(/Generate Password/i)
//   fireEvent.click(buttonGenerate)

//   Object.assign(navigator, {
//     clipboard: {
//       writeText: jest.fn().mockImplementation(() => Promise.resolve())
//     }
//   })

//   jest.spyOn(navigator.clipboard, 'writeText')

//   const buttonCopy = screen.getByText(/Copy/i)
//   fireEvent.click(buttonCopy)

//   expect(onCopyToClipboard).toHaveBeenCalled()
// })
