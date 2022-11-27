require('cypress-xpath');

class registerUserPage {
    elements = {
        salutationFrau:()=>cy.get('#radio-input-1'),
        salutationHerr:()=>cy.get('#radio-input-2'),
        salutationNeutrale:()=>cy.get('#radio-input-3'),
        firstNameInput:()=>cy.get('#input-4'),
        sureNameInput:()=>cy.get('#input-5'),
        emailAddressInput:()=>cy.get('#input-6'),
        passwordInput:()=>cy.get('#input-7'),
        CheckBoxRuleAccept:()=>cy.get('[data-testid="checkbox-label-text"]'),
        SubmitButton:()=>cy.xpath('//button[@type="submit"]').eq(1) ,
    }
    clickSalutation(gender) {
        switch(gender) {
            case "male":
                this.elements.salutationFrau().click({ force: true });
                break;
            case "female":
                this.elements.salutationHerr().click({ force: true });
                break;
            case "neutral":
                this.elements.salutationNeutrale().click({ force: true });
                break;
            default:
            console.error("the salutation is unknown")
        }
    }
    typeFirstName(firstname) {
        this.elements.firstNameInput().type(firstname);
    }
    typeSureName(lastname) {
        this.elements.sureNameInput().type(lastname);
    }
    typeEmailAddress(email) {
        this.elements.emailAddressInput().type(email);
    }
    typePasswordInput(password) {
        this.elements.passwordInput().type(password);
    }
    clickCheckBox() {
        this.elements.CheckBoxRuleAccept().click()
    }
    clickSubmitButton() {
        this.elements.SubmitButton().click();
    }
}
module.exports = new registerUserPage();