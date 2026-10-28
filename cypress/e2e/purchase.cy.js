const inventoryPage = require('../support/ui/inventoryPage')
const cartPage = require('../support/ui/cartPage')
const checkoutPage = require('../support/ui/checkoutPage')

describe('Compra', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').as('users')
    cy.fixture('customer').as('customer')
  })

  it('agrega un producto y completa el checkout', function () {
    cy.authenticate(this.users.standard.username, this.users.standard.password)
    cy.addProductToCart('sauce-labs-backpack')
    cy.get(inventoryPage.CART_BADGE).should('have.text', '1')
    cy.clickOn(inventoryPage.CART_LINK)
    cy.get(cartPage.CART_ITEM).should('have.length', 1)
    cy.completeCheckout(this.customer)
    cy.seeText(checkoutPage.COMPLETE_HEADER, 'Thank you for your order!')
  })
})
