const loginPage = require('../ui/loginPage');

Cypress.Commands.add("authenticate", (email, password) => {
    cy.get(loginPage.USERNAME_FIELD).type(email);
    cy.get(loginPage.PASSWORD_FIELD).type(password);
    cy.get(loginPage.SIGN_IN_BUTTON).click();
});