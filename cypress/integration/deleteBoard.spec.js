/// <reference types="Cypress"/>
import { deleteBoard } from "../page_objects/deleteBoard";
import { loginPage } from "../page_objects/login";

describe('deletin Board', () => {
    
    it('log in', () => {
        cy.intercept({
            method:'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login');
        cy.intercept({
            method:'GET',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations'
        }).as('login1');
        cy.visit('/');
        cy.url().should('include','/login');
        loginPage.login('smarac@gmail.com','mare23');
        cy.wait('@login').then(interception => {
            console.log('odgovor',interception);
            expect(interception.response.statusCode).eq(200);
        })
        cy.wait('@login1').then(interception => {
            console.log('odgovor1',interception);
            expect(interception.response.statusCode).eq(200);
        })
    })
    it('deletation', () => {
        deleteBoard.board.click();
        deleteBoard.configure.click();
        deleteBoard.deleteBtn.click();
        deleteBoard.yes.click();
    })
})