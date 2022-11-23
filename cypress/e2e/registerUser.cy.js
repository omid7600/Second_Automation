import cookiePage from '../pages/cookiePage'
import registerUserPage from  '../pages/registerUserPage'
const {faker} = require('@faker-js/faker');


const password = 'Test123456qwertz!';
let email = "";

beforeEach(()=>{
  cy.visit('de/registration');
  cookiePage.elements.selectAllCookie().click();
})

describe('Happy test cases: register a new user successfully', () => {
  it('register a new user successfully for hoeffner website', () => {
    const url = 'https://www.home24.ch/de';
    email = faker.internet.email();
    registerUserPage.clickSalutation(faker.name.sex());
    registerUserPage.typeFirstName(faker.name.firstName());
    registerUserPage.typeSureName(faker.name.lastName());
    registerUserPage.typeEmailAddress(email);
    registerUserPage.typePasswordInput(password);
    registerUserPage.clickSubmitButton();
    registerUserPage.clickSubmitButton();
    cy.url().should('eq', url);

  })
})