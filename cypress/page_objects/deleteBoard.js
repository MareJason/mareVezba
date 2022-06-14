class DeleteBoard{
    get board(){
        return cy.get('.vs-c-img--avatar.vs-c-img--board-avatar').eq(1);
    }
    get configure(){
        return cy.get('.vs-l-project__menu').find('.vs-c-site-logo').last();
    }
    get deleteBtn(){
        return cy.get('.vs-c-settings-section-form.vs-c-settings-section-form--limited.vs-c-settings-section-attention-wrapper').find('button').last();
    }
    get yes(){
        return cy.get('button[type="button"]').last();
    }
    get naziv(){
        return cy.get();
    }
    get naziv(){
        return cy.get();
    }
    delete(){
        this.board.click();
        this.configure.click();
        this.deleteBtn.click();
    }
}
export const deleteBoard = new DeleteBoard;