/// <reference types="Cypress" />
import { loginPage } from "../page_objects/login";

describe('loging', () => {

    before('visit login page', () => {
        cy.visit('/');
        cy.url().should('include','/')
    })
    it('login', () => {
        cy.intercept({
            method:'GET',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations'
        }).as('login');
        loginPage.heading
        .should('be.visible')
        .and('have.text','Log in with your existing account');
        loginPage.emailLabel
        .should('be.visible')
        .and('have.text','Email Address');
        loginPage.passLabel
        .should('be.visible')
        .and('have.text','Password');
        loginPage.login('smara@gmail.com','mare2323');
        cy.wait('@login').then(interception => {
            console.log('ODGOVOR',interception);
            expect(interception.response.statusCode).eq(200);
        })
    })
})