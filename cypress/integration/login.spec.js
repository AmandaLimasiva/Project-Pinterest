it('Realiza Login com sucesso', function(){
    const email = Cypress.env('USER_EMAIL')
    const password = Cypress.env('USER_PASSWORD')


    cy.intercept('GET', '**/login').as('getUser')

    cy.realizandoLogin(email, password)




})

