class SignUp{
    get h1(){
        return cy.get('h1');
    }
    get signUpBtn(){
        return cy.get('.vs-c-auth-modal__body').find('a').eq(2);
    }
    get starter(){
        return cy.get('a[title="Starter"]').last();
    }
    get emailLabel(){
        return cy.get('.el-form-item__label').eq(0);    
    }
    get emailField(){
        return cy.get('input[type="email"]').last();
    }
    get passField(){
        return cy.get('input[type="password"]');
    }
    get numOfUsers(){
        return cy.get('input[type="text"]').last();
    }
    get submitBtn(){
        return cy.get('button[type="submit"]');
    }
    signUpFun(email,pass,num){
        this.emailField.type(email);
        this.passField.type(pass);
        this.numOfUsers.type(num);
        this.submitBtn.click();
    }
}
export const signUp = new SignUp;