import cookiePage from '../pages/cookiePage'
import registerUserPage from  '../pages/registerUserPage'
const {faker} = require('@faker-js/faker');


const password = 'Test123456qwertz!';
let email = "";

beforeEach(()=>
{
  cy.visit('/registration');
  cy.setCookie('OptanonAlertBoxClosed','2022-11-27T15:11:23.597Z');
})
describe('Happy test cases: register a new user successfully', () => {
  it('register a new user successfully for hoeffner website', () => {
    const url = 'https://www.home24.de/meinkundenkonto';
    email = `${faker.name.firstName().toLowerCase()}  ${faker.name.lastName().toLowerCase()} . ${faker.random.numeric(4)} @cuvox.de`;
    registerUserPage.clickSalutation("male");
    registerUserPage.typeFirstName(faker.name.firstName());
    registerUserPage.typeSureName(faker.name.lastName());
    registerUserPage.typeEmailAddress(email);
    registerUserPage.typePasswordInput(password);
    registerUserPage.clickCheckBox();
    registerUserPage.clickSubmitButton();
    cy.url().should('eq', url);
  })
})