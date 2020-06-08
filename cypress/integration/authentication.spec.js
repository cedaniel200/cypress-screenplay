/// <reference types="cypress"/>
const loginPage = require('../support/ui/loginPage');

describe('login', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('user').as('userData');
    });

    it('Autenticación exitosa', function() {
        cy.authenticate(this.userData.email, this.userData.rightPassword);
        cy.get('.application-main > .flex-wrap').should('be.visible');
    });

    it('Autenticación fallida', function() {
        cy.authenticate(this.userData.email, this.userData.wrongPassword);
        cy.get(loginPage.ERROR_MESSAGE).should('be.visible');
    });
});