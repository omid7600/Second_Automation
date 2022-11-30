import cookiePage from '../pages/cookiePage'
import registerUserPage from  '../pages/registerUserPage'
const {faker} = require('@faker-js/faker');


const password = 'Test123456qwertz!';
let email = "";
const pass1 = ' ';
const user1 = 'a';
const user2 = 'a';
const email1 = 'a';



beforeEach(()=>
{
  cy.visit('/registration');
  cy.setCookie('OptanonAlertBoxClosed','2022-11-27T15:11:23.597Z');
})
describe('Happy test cases: register a new user successfully', () => {
  it('register a new user successfully for home24 website', () => {
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

describe('Unhappy test cases: unsuccessfully register a new user',() => {
  it('register a duplicate user',() => {
    const url = 'https://www.home24.de/meinkundenkonto';
    registerUserPage.clickSalutation("male");
    registerUserPage.typeFirstName(faker.name.firstName());
    registerUserPage.typeSureName(faker.name.lastName());
    registerUserPage.typeEmailAddress(email);
    registerUserPage.typePasswordInput(password);
    registerUserPage.clickCheckBox();
    registerUserPage.clickSubmitButton();
    registerUserPage.elements.registerErrorDuplicateUser().should('have.text','Zu dieser E-Mail-Adresse existiert bereits ein Kundenkonto. Melde dich hier an oder klicke auf Passwort vergessen, falls du deine Anmelde-Daten vergessen hast.');
  })

  it('register a with unsecure password(has 6 or more characters-contains at least one letter-contains a number)', () => {
    registerUserPage.clickSalutation("male");
    registerUserPage.typeFirstName(faker.name.firstName());
    registerUserPage.typeSureName(faker.name.lastName());
    registerUserPage.typeEmailAddress(email);
    registerUserPage.typePasswordInput(pass1);
  })

  it('register a with unsecure Emailaddress-firstName-surName', () => {
    registerUserPage.clickSalutation("male");
    registerUserPage.typeFirstName(user1);
    registerUserPage.typeSureName(user2);
    registerUserPage.typeEmailAddress(email1);
    registerUserPage.typePasswordInput(password);
    registerUserPage.elements.registerErrorEmail().should('have.text','Die E-Mail-Adresse ist ungültig. Bitte überprüfe die Eingabe.');


  })








})