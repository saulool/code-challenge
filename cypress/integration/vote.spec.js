/// <reference types="Cypress" />

import moment from "moment";

context('Vote', () => {
  if(moment('12:00:00', 'HH:mm:ss').diff(moment()) > 0){
    it('is accounted', () => {
      cy.visit('http://localhost:3000/client/compiled/#!/results')
      let votes = 0;
      cy.get('.restaurant:contains(Garcias) .votes').invoke('text').then((text) => {
        votes = Number(text.split(" ")[1]);
  
        cy.visit('http://localhost:3000/client/compiled/#!/vote')
  
        cy.get('.restaurant:contains(Garcias) .vote')
          .click()
  
        cy.visit('http://localhost:3000/client/compiled/#!/results')
  
        cy.get('.restaurant:contains(Garcias) .votes')
          .should('have.text', `Votes: ${votes+1}`)
      });
    });
  
    it('is already accounted', () => {
      cy.visit('http://localhost:3000/client/compiled/#!/results')
      let votes = 0;
      cy.get('.restaurant:contains(Garcias) .votes').invoke('text').then((text) => {
        votes = Number(text.split(" ")[1]);
  
        cy.visit('http://localhost:3000/client/compiled/#!/vote')
  
        cy.get('.restaurant:contains(Garcias) .vote')
          .click()
  
        cy.visit('http://localhost:3000/client/compiled/#!/results')
  
        cy.get('.restaurant:contains(Garcias) .votes')
          .should('have.text', `Votes: ${votes}`)
      });
    });

    it('shows countdown' ,() => {
      cy.visit('http://localhost:3000/client/compiled/#!/')
      
      cy.get('h1').should('have.text', 'Time until next lunch');
      cy.get('.timer').should('be.visible');
      cy.get('.actions').should('be.visible');
    });
  } else {
    it('cant vote anymore', () => {
      cy.visit('http://localhost:3000/client/compiled/#!/results')
      let votes = 0;
      cy.get('.restaurant:contains(Garcias) .votes').invoke('text').then((text) => {
        votes = Number(text.split(" ")[1]);
  
        cy.visit('http://localhost:3000/client/compiled/#!/vote')
  
        cy.get('.restaurant:contains(Garcias) .vote')
          .click()

        cy.get('.alert-danger .message').should('have.text', "You can't vote anymore");
      });
    });

    it('doesnt count vote', () => {
      cy.visit('http://localhost:3000/client/compiled/#!/results')
      let votes = 0;
      cy.get('.restaurant:contains(Garcias) .votes').invoke('text').then((text) => {
        votes = Number(text.split(" ")[1]);
  
        cy.visit('http://localhost:3000/client/compiled/#!/vote')
  
        cy.get('.restaurant:contains(Garcias) .vote')
          .click()
  
        cy.visit('http://localhost:3000/client/compiled/#!/results')
  
        cy.get('.restaurant:contains(Garcias) .votes')
          .should('have.text', `Votes: ${votes}`)
      });
    });

    it('doesnt shows countdown' ,() => {
      cy.visit('http://localhost:3000/client/compiled/#!/')
      
      cy.get('h1').should('have.text', "You can't vote anymore. Come back tomorrow.");
    });
  }
});