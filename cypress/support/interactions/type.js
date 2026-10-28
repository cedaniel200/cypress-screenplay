Cypress.Commands.add('typeInto', (selector, text) => {
  cy.get(selector).clear().type(text)
})
