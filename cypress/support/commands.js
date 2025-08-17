Cypress.Commands.add('loginWithSession', () => {
    cy.session('userSession', () => {
      cy.fixture('user').then((user) => {
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type(user.email);
        cy.get('[data-qa="login-password"]').type(user.password);
        cy.get('[data-qa="login-button"]').click();
      });
    }, {
      validate: () => {
        cy.visit('https://automationexercise.com');
        cy.fixture('user').then((user) => {
          cy.contains(`Logged in as ${user.name}`).should('be.visible');
        });
      },
    });
  });

Cypress.Commands.add("verifyProductDetails", (name, price, availability) => {
  cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
  cy.contains(name).should('be.visible');
  cy.contains(price).should('be.visible');
  cy.contains(availability).should('be.visible');
});


Cypress.Commands.add('addToCart', (productName) => {
  cy.contains(productName)
  .parents('.product-image-wrapper')
  .find('.productinfo .btn')
  .contains('Add to cart')   
  .click();
  cy.contains("Continue Shopping").click()
});
