/// <reference types="Cypress"/>
import { loginPage } from "../page_objects/login";
import { newOrg } from "../page_objects/addNewOrg";

describe('adding new organization',() => {

    before('visit login page',() => {
        cy.visit('/');
        cy.url().should('include','/');
    })
    it('login',() => {
        cy.intercept({
            method:'GET',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/common'
        }).as('login');
        loginPage.login('smara@gmail.com','mare2323');
        cy.url().should('not.include','/login');
        cy.url().should('include','/my-organizations');
        cy.wait('@login').then(interception => {
            console.log('odgovor',interception);
            expect(interception.response.statusCode).eq(200);
        })
    })
    it('add new organization', () => {
        cy.intercept({
            method:'GET',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/users/app-notifications'
        }).as('adding');
        newOrg.pageValidation
        .should('be.visible')
        .and('have.text','Add new Organization');
        newOrg.organization('Maretova Organizacija');
        cy.wait('@adding').then(interception => {
            console.log('odgovor',interception);
            expect(interception.response.statusCode).eq(200);
        })
    })
})