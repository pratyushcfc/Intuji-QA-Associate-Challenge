class RegisterPage {
    visit() {
      cy.visit("https://automationexercise.com/login");
    }
  
    signup(name, email) {
      cy.get('[data-qa="signup-name"]').type(name);
      cy.get('[data-qa="signup-email"]').type(email);
      cy.get('[data-qa="signup-button"]').click();
    }
  
    fillAccountForm(user) {
      cy.get('#id_gender1').check();
      cy.get('[data-qa="password"]').type(user.password);
      cy.get('[data-qa="days"]').select("1");
      cy.get('[data-qa="months"]').select("1");
      cy.get('[data-qa="years"]').select("2000");
      cy.get('[data-qa="first_name"]').type(user.firstName);
      cy.get('[data-qa="last_name"]').type(user.lastName);
      cy.get('[data-qa="company"]').type(user.company);
      cy.get('[data-qa="address"]').type(user.address);
      cy.get('[data-qa="address2"]').type(user.address2);
      cy.get('[data-qa="country"]').select("Singapore");
      cy.get('[data-qa="state"]').type(user.state);
      cy.get('[data-qa="city"]').type(user.city);
      cy.get('[data-qa="zipcode"]').type(user.zipcode);
      cy.get('[data-qa="mobile_number"]').type(user.mobile);
      cy.get('[data-qa="create-account"]').click();
    }
  
    checkEmailExistsError() {
      cy.contains('Email Address already exist!').should('be.visible');
    }
  
    verifyLoggedIn(name) {
      cy.contains(`Logged in as ${name}`).should('be.visible');
    }
  }
  
  export default new RegisterPage();