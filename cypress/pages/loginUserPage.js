require('cypress-xpath');

class loginUserPage {
    elements = {
        emailLoginPage:()=>cy.get('#input-1'),
        passwordLoginPage:()=>cy.get('#input-2'),
        loginPageError:()=>cy.get('.css-tw8q33'),
        loginPageSubmit:()=>cy.get('.css-1bxciiq'),
    }

    typeEmailLoginPage(email) {
        this.elements.emailLoginPage().type(email);
    }
    typePasswordLoginPage(password) {
        this.elements.passwordLoginPage().type(password);
    }
    ClickLoginPageSubmit() {
        this.elements.loginPageSubmit().click();
    }

}

module.exports = new loginUserPage();