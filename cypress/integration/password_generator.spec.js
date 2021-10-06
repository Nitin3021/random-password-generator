/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
describe('Generic testing to check proper UI access', () => {
  it('allows user to generate random password on default settings', () => {
    // visit the base url
    cy.visit('/')
    // submit
    cy.findByRole('button', { name: /generate password/i }).click()
    // assert password length
    cy.get('.password-display').then(($div) => {
      expect($div.text().length).to.equal(10)
    })
  })
})

describe('Specific testing to check proper UI access', () => {
  it('will increase password length greater than default value', () => {
    const passwordLength = 21
    // visit the base url
    cy.visit('/')

    // clear the default value
    cy.findByRole('spinbutton', { name: /password length/i })
      .click()
      .clear()
    // type new value
    cy.findByRole('spinbutton', { name: /password length/i })
      .click()
      .type(passwordLength)
    // submit
    cy.findByRole('button', { name: /generate password/i }).click()
    // assert password length
    cy.get('.password-display').then(($div) => {
      expect($div.text().length).to.equal(passwordLength)
    })
  })

  it('will opt to include uppercase & symbols', () => {
    const passwordLength = 42
    // visit the base url
    cy.visit('/')

    // clear the default value
    cy.findByRole('spinbutton', { name: /password length/i })
      .click()
      .clear()
    // type new value
    cy.findByRole('spinbutton', { name: /password length/i })
      .click()
      .type(passwordLength)
    // include uppercase
    cy.findByRole('checkbox', { name: /include uppercase/i }).click()
    // include symbols
    cy.findByRole('checkbox', { name: /include symbols/i }).click()
    // submit
    cy.findByRole('button', { name: /generate password/i }).click()

    // assert password length
    cy.get('.password-display').then(($div) => {
      expect($div.text().length).to.equal(passwordLength)
    })
    // assert checkbox selection
    cy.get('#checkUpperCase').should('be.checked')
    // assert checkbox selection
    cy.get('#checkSymbols').should('be.checked')
  })
})

describe('check the Copy button', () => {
  it('will disable the copy button if there is no password generated', () => {
    // visit the base url
    cy.visit('/')

    // assert copy button
    cy.get('.copy-btn').should('be.disabled')
  })

  it('will enable the copy button if there is password generated', () => {
    // visit the base url
    cy.visit('/')

    // select include symbols
    cy.findByRole('checkbox', { name: /include numbers/i }).click()
    // submit
    cy.findByRole('button', { name: /generate password/i }).click()
    // assert copy button
    cy.get('.copy-btn').should('be.enabled')
    // click copy button
    cy.get('.copy-btn').click()
    // assert copy button after click
    cy.findByRole('button', { name: /copied!/i }).should('be.enabled')
    // check clipboard
    let copiedValue
    cy.window().then(async (win) => {
      await win.navigator.clipboard.readText().then((text) => {
        copiedValue = text
      })
    })
    // compare copied value and generated value
    cy.get('.password-display').then(async ($div) => {
      await expect($div.text()).to.eq(copiedValue)
    })
  })
})
