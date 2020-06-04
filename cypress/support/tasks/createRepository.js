Cypress.Commands.add("createRepository", (repository) => {
    cy.get('#repository_name').type(repository.name);
    cy.wait(2000);
    cy.get('.error > strong').should('not.exist');
    cy.get('#repository_description').type(repository.description);
    cy.get(`#repository_visibility_${repository.visibility}`).click();
    if (repository.startWithReadme)
        cy.get('#repository_auto_init').click();
    cy.selectGitignore('JAVA');
    cy.selectLicense('mit');
    cy.get('div.js-with-permission-fields > .btn-primary').click();
});