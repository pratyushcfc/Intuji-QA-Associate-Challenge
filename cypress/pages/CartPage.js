class ProductsPage {
    visit() {
      cy.visit('https://automationexercise.com/products');
    }
  
    filterByCategory(parentCategory, subCategory) {
      cy.contains('a', parentCategory).click({force:true});
      cy.contains('a', subCategory).click();
    }

    viewCart(){
      cy.visit("https://automationexercise.com/view_cart")
    }

    getProductRow(productName) {
      return cy.contains('td.cart_description h4', productName).parents('tr');
    }
  
    verifyProductQuantity(productName, expectedQty) {
      this.getProductRow(productName)
        .find('td.cart_quantity button')
        .should('contain.text', expectedQty);
    }

    removeProduct(productName){
      this.getProductRow(productName)
      .find('td.cart_delete a')
      .click()
    }

    verifyProductRemoval(productName){
      cy.get('body').should('not.contain',productName)
    }

    verifyProductTotal(productName, expectedTotal) {
      this.getProductRow(productName)
        .find('td.cart_total p')
        .should('contain.text', expectedTotal);
    }
    
  }
  
  export default new ProductsPage();