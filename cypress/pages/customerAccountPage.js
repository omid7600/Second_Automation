require('cypress-xpath');

class customerAccountPage {
    elements = {
        signOutLabel:()=>cy.get('#action-item-label-h24_register'),
    }
    ClickSingOutLable() {
        this.elements.signOutLabel().click();
    }
}
module.exports = new customerAccountPage();