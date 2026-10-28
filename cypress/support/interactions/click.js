Cypress.Commands.add('clickOn', (selector) => {
  cy.get(selector).click()
})
