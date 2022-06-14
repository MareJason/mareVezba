/// <reference types="Cypress"/>
import { newBoard } from "../page_objects/addNewBoard";
import { loginPage } from "../page_objects/login";

describe('adding new board', () => {
    before('visit login page', () => {
        cy.visit('/')
        cy.url().should('include','/login');
    })
    it('login', () => {
        cy.intercept({
            method:'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login1st');
        cy.intercept({
            method:'GET',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/common'
        }).as('login');
        loginPage.login('smara@gmail.com','mare2323');
        cy.url()
        .should('not.include','/login')
        .and('include','/my-organizations');
        newBoard.newOrganization.should('be.visible');
        cy.wait('@login').then(interception => {
            console.log('odgovor',interception);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.method).eq(null);
            expect(interception.response.statusMessage).eq('OK');
        })
        cy.wait('@login1st').then(interception => {
            console.log('odgovor1',interception);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.method).eq(null);
            expect(interception.response.statusMessage).eq('OK');
        })
    })

    it('create new board', () => {
        newBoard.newOrganization.click()
        newBoard.addingBoard('Maretov Board');
    })
})