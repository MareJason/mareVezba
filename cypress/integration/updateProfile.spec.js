/// <reference types="Cypress"/>
import { updateProfile } from "../page_objects/updateProfile";
import { loginPage } from "../page_objects/login";

describe('Profile update',() => {

        before('visit login page', () => {
            cy.visit('/');
            cy.url().should('include','/');
            loginPage.login('smara@gmail.com','mare2323');
        })
        it('updating profile data', () => {
            cy.intercept({
                method:'GET',
                url:'https://cypress-api.vivifyscrum-stage.com/api/v2/common'
            }).as('update');
            updateProfile.profileAvatar.click();
            cy.url().should('not.include','/my-organizations');
            cy.wait(2000);
            updateProfile.profileLogo.click();
            cy.url().should('not.include','account/my-assignments');
            cy.url().should('include','/account/settings');
            updateProfile.update('Marko','Crnomarkovic','mare23');
            cy.wait('@update').then(interception => {
                console.log('odgovor',interception);
                expect(interception.response.statusCode).eq(200);
                expect(interception.response.statusMessage).eq('OK');
                expect(interception.response.method).eq(null);
            })
        })
})