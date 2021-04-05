/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()

describe('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('/')
        cy.get('.login').click()
        cy.get('#email_create').type(chance.email({domain: "teste.com"}))
        cy.get('#SubmitCreate').click()

        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())
        cy.get('#passwd').type('Teste@123')
        cy.get('#days').select('20')
        cy.get('#months').select('5')
        cy.get('#years').select('2000')
        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#address2').type('Casa')
        cy.get('#city').type(chance.city())
        cy.get('#id_country').select('United States')
        cy.get('select#id_state').select('11')
        cy.get('#postcode').type('00000')
        
        cy.get('#other').type('Desafio Bootcamp Agilizei')
        cy.get('#phone_mobile').type('48999999999')
        cy.get('#submitAccount').click()

        cy.url().should('contain', 'my-account')
        cy.get('#page').should('contain', 'Welcome to your account.')
    });
});