class UpdateProfile{

    get profileAvatar(){
        return cy.get('.vs-u-img--round.vs-c-user-avatar');
    }
    get profileLogo(){
        return cy.get('a.vs-c-site-logo').eq(3);
    }
    get firstName(){
        return cy.get('input[type="text"]').eq(0);
    }
    get lastName(){
        return cy.get('input[type="text"]').eq(1);
    }
    get password(){
        return cy.get('input[type="password"]').eq(0);
    }
    get naziv(){
        return cy.get('');
    }
    update(fName,lName,pass){
        this.firstName.type(fName);
        this.lastName.type(lName);
        this.password.type(pass);
    }
}
export const updateProfile = new UpdateProfile;