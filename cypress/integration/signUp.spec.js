/// <reference types="Cypress" />
import { signUp } from "../page_objects/signUp";

describe('sign up steps', () => {

    it('visit Sign Up page', () => {
        cy.visit('/');
        cy.url().should('include','/');
        signUp.h1
        .should('be.visible')
        .and('have.text','Log in with your existing account');
        signUp.signUpBtn.click();
        signUp.starter.click({force: true});
        })
   
    it('do the Sign Up',() => {
        cy.intercept({
            method:'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/register'
        }).as('signUp');
        signUp.emailLabel
        .should('be.visible')
        .and('have.text','Your Email');
        signUp.signUpFun('smara@gmail.com','mare2323',7);
        cy.wait('@signUp').then(interception => {
            console.log('odgovor',interception);
            expect(interception.response.statusCode).eq(200);
        })
    })

})