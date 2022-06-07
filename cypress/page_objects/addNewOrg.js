/// <reference types="Cypress"/>
class NewOrg{
    get pageValidation() {
        return cy.get('.vs-c-my-organization__title').last();
    }
    get addNew() {
        return cy.get('.vs-c-my-organization.vs-c-my-organization--add-new.not-sortable');
    }
    get newOrganization() {
        return cy.get('.vs-c-modal.vs-c-modal--starter.vs-c-modal--create-organization');
    }
    get orgName() {
        return cy.get('input[type="text"]');
    }
    get nextBtn() {
        return cy.get('button[type="button"]').last();
    }
    get createBtn() {
        return cy.get('button[type="button"]').last();
    }
    organization(name){
        this.addNew.click();
        this.newOrganization.click();
        this.orgName.type(name);
        this.nextBtn.click();
        this.createBtn.click();
    }
}
export const newOrg = new NewOrg;