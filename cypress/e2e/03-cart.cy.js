import CartPage from '../pages/CartPage';


describe('Cart & Quantity management', () => {
  before(() => {
    cy.loginWithSession();
  });

  it('should verify cart & quantity management', () => {
    cy.fixture('user').then((user) => {
      CartPage.visit();

      CartPage.filterByCategory("Women","Dress")
      cy.addToCart("Stylish Dress")

      CartPage.filterByCategory("Kids","Tops & Shirts")
      cy.addToCart("Sleeves Printed Top - White")
      cy.addToCart("Sleeves Printed Top - White")
      cy.addToCart("Sleeves Printed Top - White")

      CartPage.viewCart()
      CartPage.verifyProductQuantity("Sleeves Printed Top - White","3")

      CartPage.removeProduct("Stylish Dress")
      CartPage.verifyProductRemoval("Stylish Dress")

      CartPage.verifyProductTotal("Sleeves Printed Top - White", "1497")
      cy.screenshot("cart")
    });
  });
});