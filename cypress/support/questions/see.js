Cypress.Commands.add('seeVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('seeText', (selector, text) => {
  cy.get(selector).should('contain.text', text)
})
