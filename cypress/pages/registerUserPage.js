require('cypress-xpath');

class registerUserPage {
    elements = {
        salutation:()=>cy.xpath('//input[@id="radio-input-1"]'),
        firstNameInput:()=>cy.xpath('//input[@id="radio-input-1"]'),
        sureNameInput:()=>cy.xpath('//input[@id="input-5"]'),
        emailAddressInput:()=>cy.xpath('//input[@id="input-6"]'),
        passwordInput:()=>cy.xpath('Password://input[@id="input-7"]'),
        clickCheckBox:()=>cy.xpath('//input[@id="checkbox-8"]'),
        clickSubmitButton:()=>cy.xpath('button[@class="css-1bxciiq"]'),
    }
    clickSalutation(gender) {
        this.elements.salutation().click(gender);
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
    cliskChekBox() {
        this.elements.clickCheckBox().click()
    }
    clickSubmitButton() {
        this.elements.clickSubmitButton().click();
    }
}
module.exports = new registerUserPage();