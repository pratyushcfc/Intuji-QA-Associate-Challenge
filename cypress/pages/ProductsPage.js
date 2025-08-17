class ProductsPage {
  visit() {
    cy.visit('https://automationexercise.com/products');
  }

  filterByCategory(parentCategory, subCategory) {
    cy.contains('a', parentCategory).click({force:true});
    cy.contains('a', subCategory).click({force:true});
  }

  verifyListing(keyword){
    cy.contains(keyword).should('be.visible');
  }

  
}

export default new ProductsPage();