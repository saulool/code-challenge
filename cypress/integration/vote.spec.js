/// <reference types="Cypress" />

context('Vote', async() => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/client/compiled/#!/results')
  })

  it('is accounted', async() => {
    let votes = 0;
    cy.get('.restaurant:contains(Garcias) .votes').invoke('text').then((text) => {
      votes = Number(text.split(" ")[1]);

      cy.visit('http://localhost:3000/client/compiled/#!/vote')

      cy.get('.restaurant:contains(Garcias) .vote')
        .click()

      cy.visit('http://localhost:3000/client/compiled/#!/results')

      cy.get('.restaurant:contains(Garcias) .votes')
        .should('have.text', `Votes: ${votes+1}`)
    })

    
  })
})
