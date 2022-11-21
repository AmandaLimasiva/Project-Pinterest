//Comando realiza o login
Cypress.Commands.add('realizandoLogin', (email, password) => {
    cy.visit('/')
    cy.get('.wc1 > .oRi > .RCK').click()
    cy.contains('h1','Welcome to Pinterest')
        .should('be.visible')
    cy.get('#email').type(email)
    cy.get('#password').type(password, { log: false })
    cy.get('button[class*=SignupButton]').click()

})