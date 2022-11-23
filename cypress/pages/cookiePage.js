require('cypress-xpath');

class cookiePage {
    elements = {
        selectAllCookie:()=>cy.xpath('//button[@id="onetrust-accept-btn-handler"]'),
    }
    clickSelectAllCookie() {
        this.elements.selectAllCookie().click();
    }
}
module.exports = new cookiePage();