const inventoryPage = require('../ui/inventoryPage')

Cypress.Commands.add('addProductToCart', (product) => {
  cy.clickOn(inventoryPage.ADD_TO_CART(product))
})
