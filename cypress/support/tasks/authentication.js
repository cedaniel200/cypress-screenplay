Cypress.Commands.add("autenticacion", (email, password) => {
    cy.get('#login_field').type(email);
    cy.get('#password').type(password);
    cy.get('.btn').click();
});