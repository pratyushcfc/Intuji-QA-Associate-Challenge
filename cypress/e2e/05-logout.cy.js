import LogOut from "../pages/LogOut";

describe('Logout and re-login', () => {
    before(() => {
      cy.loginWithSession();
    });
  
    it('should allow logout and re-login', () => {
      cy.fixture('user').then((user) => {

        LogOut.visit()

        LogOut.logOut()
        LogOut.verifyLogOut()

        cy.loginWithSession()    
        cy.screenshot("logout")
      });
    });
  });