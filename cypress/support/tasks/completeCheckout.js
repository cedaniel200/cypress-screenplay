const cartPage = require('../ui/cartPage')
const checkoutPage = require('../ui/checkoutPage')

Cypress.Commands.add('completeCheckout', (customer) => {
  cy.clickOn(cartPage.CHECKOUT)
  cy.typeInto(checkoutPage.FIRST_NAME, customer.firstName)
  cy.typeInto(checkoutPage.LAST_NAME, customer.lastName)
  cy.typeInto(checkoutPage.POSTAL_CODE, customer.postalCode)
  cy.clickOn(checkoutPage.CONTINUE)
  cy.clickOn(checkoutPage.FINISH)
})
