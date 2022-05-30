class LoginPage{
    get heading(){
        return cy.get('h1');
    }
    get emailLabel(){
        return cy.get('.el-form-item__label').first();
    }
    get emailField(){
        return cy.get('input[type="email"]');
    }
    get passLabel(){
        return cy.get('.el-form-item__label').last();
    }
    get passField(){
        return cy.get('input[type="password"]');
    }
    get submitBtn() {
        return cy.get('button[type="submit"]');
    }
    login(email,pass){
        this.emailField.type('smara@gmail.com');
        this.passField.type('mare2323');
        this.submitBtn.click();
    }
}
export const loginPage = new LoginPage;