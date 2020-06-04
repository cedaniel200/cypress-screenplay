Cypress.Commands.add("selectGitignore", (filterValue) => {
    cy.get('.my-3 > .select-menu > .btn').click();
    cy.get('#context-ignore-filter-field').type(filterValue);
    cy.get('.filterable-active').click();
});

Cypress.Commands.add("selectLicense", (filterValue) => {
    cy.get('.btn > .text-normal').click()
    cy.get('.SelectMenu-filter > .width-full').type('MIT');
    cy.xpath(`//div[@class="SelectMenu-list"]//input[contains(@value, '${filterValue.toLowerCase()}')]`)
        .click({ force: true });
});