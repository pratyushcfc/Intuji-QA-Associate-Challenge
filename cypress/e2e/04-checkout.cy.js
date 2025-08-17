import CheckOutPage from "../pages/CheckOutPage";

describe('Checkout flow', () => {
    before(() => {
      cy.loginWithSession();
    });
  
    it('should verify Checkout Flow with Fake Payment', () => {
      cy.fixture('user').then((user) => {
       
        CheckOutPage.visit()

        CheckOutPage.placeOrder()

        CheckOutPage.fillCardDetails("testname","20202","202","2","2026")

        CheckOutPage.pay()

        CheckOutPage.verifyOrder()
        cy.screenshot("checkout")
      });
    });
  });