const loginPage = require('../support/ui/loginPage')
const inventoryPage = require('../support/ui/inventoryPage')

describe('Autenticación', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').as('users')
  })

  it('inicia sesión con un usuario válido', function () {
    cy.authenticate(this.users.standard.username, this.users.standard.password)
    cy.seeVisible(inventoryPage.INVENTORY_LIST)
  })

  it('muestra error con un usuario bloqueado', function () {
    cy.authenticate(this.users.locked.username, this.users.locked.password)
    cy.seeText(loginPage.ERROR, 'Sorry, this user has been locked out.')
  })
})
