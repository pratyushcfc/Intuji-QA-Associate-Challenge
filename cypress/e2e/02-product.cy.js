import ProductsPage from '../pages/ProductsPage';

describe('Product', () => {
  before(() => {
    cy.loginWithSession();
  });

  it('should filter products by category and verify product details', () => {
    cy.fixture('user').then((user) => {
      ProductsPage.visit();

      ProductsPage.filterByCategory('Women', 'Dress');
      ProductsPage.verifyListing("Sleeveless Dress")
      cy.verifyProductDetails('Rose Pink Embroidered Maxi Dress','Rs. 2300', 'In Stock')
      cy.screenshot("product")
    });
  });
});