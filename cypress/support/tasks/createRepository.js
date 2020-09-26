const newRepositoryPage = require('../ui/createNewRepositoryPage');

Cypress.Commands.add("createRepository", (repository) => {
    cy.get(newRepositoryPage.REPOSITORY_NAME).type(repository.name);
    cy.wait(2000);
    cy.get(newRepositoryPage.MESSAGE_REPOSITORY_ALREADY_EXISTS).should('not.exist');
    cy.get(newRepositoryPage.REPOSITORY_DESCRIPTION).type(repository.description);
    cy.get(newRepositoryPage.REPOSITORY_VISIBILITY(repository.visibility)).click();
    if (repository.startWithReadme)
        cy.get(newRepositoryPage.INITIALIZE_THIS_REPOSITORY_WITH_README).click();
    if (repository.gitignore)
        cy.selectGitignore(repository.gitignore);
    if (repository.license)
        cy.selectLicense(repository.license);
    cy.get(newRepositoryPage.CREATE_REPOSITORY).click();
});