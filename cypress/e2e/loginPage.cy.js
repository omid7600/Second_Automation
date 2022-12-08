import loginUserPage from '../pages/loginUserPage'
import customerAccountPage from '../pages/customerAccountPage'


describe('Happy test cases: login a  user successfully' , function() {
  before(() => {
    cy.visit('/meinkundenkonto/kunde/login');
    cy.setCookie('OptanonAlertBoxClosed', '2022-11-27T15:11:23.597Z');
    cy.fixture('/userCredentials')
        .then(credentials => {
          this.credentials = credentials;
        })
  });

  it('Login a user', () => {
    loginUserPage.typeEmailLoginPage(this.credentials.email);
    loginUserPage.typePasswordLoginPage(this.credentials.password);
    loginUserPage.ClickLoginPageSubmit();
    cy.url().should('eq', 'https://www.home24.de/meinkundenkonto');
    // customerAccountPage.ClickSingOutLable();
    cy.visit('/meinkundenkonto/kunde/login');
  });

});

describe('Unhappy test cases: unsuccessfully login',function(){
  beforeEach(()=>{
    cy.visit('/meinkundenkonto/kunde/login');
    cy.setCookie('OptanonAlertBoxClosed', '2022-11-27T15:11:23.597Z');
    cy.fixture('/userCredentials')
        .then(credentials => {
          this.credentials = credentials;
        })
  });

  it('Login with invalid user credentials', () => {
    cy.fixture('userCredentials').then((date)=>{
     loginUserPage.typeEmailLoginPage(this.credentials.user);
     loginUserPage.typePasswordLoginPage(this.credentials.password);
    });
    loginUserPage.ClickLoginPageSubmit()
    loginUserPage.GetloginPageError().should('have.text','Unbekannte E-Mail oder ungültiges Passwort – Anmeldung fehlgeschlagen');
  });

  it('Login with invalid password', () => {
    cy.fixture('userCredentials').then((date)=>{
      loginUserPage.typeEmailLoginPage(this.credentials.email);
          loginUserPage.typePasswordLoginPage(this.credentials.pass);
    });

    loginUserPage.ClickLoginPageSubmit();
    loginUserPage.GetloginPageError().should('have.text','Unbekannte E-Mail oder ungültiges Passwort – Anmeldung fehlgeschlagen')
  });

  it('Login unsuccessfully: with empty input', () => {

  });


})






