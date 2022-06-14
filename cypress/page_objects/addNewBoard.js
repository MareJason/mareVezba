class NewBoard{
    get newOrganization() {
        return cy.get('.vs-c-my-organization__content').first();
    }
    get addNewBoard() {
        return cy.get('.vs-c-organization-boards__item--add-new');
    }
    get label() {
        return cy.get('.el-form-item__label.vs-u-text--uppercase');
    }
    get boardTitle() {
        return cy.get('input[type="text"]').last();
    }
    get nextBtn() {
        return cy.get('button[type="button"]').last();
    }
    get kanban() {
        return cy.get('.vs-c-modal__body').find('span').last();
    }
    get nextBtn2() {
        return cy.get('button[type="button"]').last();
    }
    get nextBtn3() {
        return cy.get('button[type="button"]').last();
    }
    get finishBtn() {
        return cy.get('button[type="button"]').last();
    }
    addingBoard(title){
        this.newOrganization.click();
        this.addNewBoard.click();
        this.label.should('be.visible');
        this.boardTitle.type(title);
        this.nextBtn.click();
        this.kanban.click();
        this.nextBtn2.click();
        this.nextBtn3.click();
        this.finishBtn.click();
    }
}
export const newBoard = new NewBoard;