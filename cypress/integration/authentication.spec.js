/// <reference types="cypress"/>

describe('login', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('user').as('userData');
    });

    it('Autenticación exitosa', function() {
        cy.autenticacion(this.userData.email, this.userData.rightPassword);
        cy.get('.application-main > .flex-wrap').should('be.visible');
    });

    it('Autenticación fallida', function() {
        cy.autenticacion(this.userData.email, this.userData.wrongPassword);
        cy.get('#js-flash-container > .flash').should('be.visible');
    });
});