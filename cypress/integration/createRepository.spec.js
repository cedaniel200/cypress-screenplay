/// <reference types="cypress"/>

describe('Crear Repositorio', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('user').as('userData');
        cy.fixture('repository').as('repositoryData');
    });


    it('Creación exitos de un repositorio', function() {
        cy.authenticate(this.userData.email, this.userData.rightPassword);
        cy.get('#dashboard-repos-container > #repos-container > .f4 > .btn').click();
        cy.createRepository(this.repositoryData);
        cy.url().should('include', '/Repositorio-de-prueba')
    });

});