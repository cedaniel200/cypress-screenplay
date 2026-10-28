const loginPage = require('../ui/loginPage')

Cypress.Commands.add('authenticate', (username, password) => {
  cy.typeInto(loginPage.USERNAME, username)
  cy.typeInto(loginPage.PASSWORD, password)
  cy.clickOn(loginPage.LOGIN_BUTTON)
})
