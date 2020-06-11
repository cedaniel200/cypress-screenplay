/// <reference types="cypress"/>

const homePage = require('../support/ui/homePage');

describe('Crear Repositorio', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('user').as('userData');
        cy.fixture('repository').as('repositoryData');
    });


    it('Creación exitos de un repositorio', function() {
        cy.authenticate(this.userData.email, this.userData.rightPassword);
        cy.get(homePage.NEW_REPOSITORY_BUTTON).click();
        cy.createRepository(this.repositoryData);
        cy.url().should('include', this.repositoryData.name)
    });

});