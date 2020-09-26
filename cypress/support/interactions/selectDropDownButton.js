const newRepositoryPage = require('../ui/createNewRepositoryPage');

Cypress.Commands.add("selectGitignore", (filterValue) => {
    cy.get(newRepositoryPage.CHECKBOX_GITIGNORE).click();
    cy.get(newRepositoryPage.ADD_GITIGNORE).click();
    cy.get(newRepositoryPage.FILTER_GITIGNORE).type(filterValue);
    cy.get(newRepositoryPage.GITIGNORE_OPTION_TO_SELECT).click();
});

Cypress.Commands.add("selectLicense", (filterValue) => {
    cy.get(newRepositoryPage.CHECKBOX_LICENSE).click();
    cy.contains(newRepositoryPage.ADD_LICENSE).click()
    cy.get(newRepositoryPage.FILTER_LICENSE).type(filterValue);
    cy.xpath(newRepositoryPage.LICENSE_OPTION_TO_SELECT(filterValue.toLowerCase()))
        .click({ force: true });
});