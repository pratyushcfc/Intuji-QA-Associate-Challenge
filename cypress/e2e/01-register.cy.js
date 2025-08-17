import { faker } from "@faker-js/faker";
import RegisterPage from "../pages/RegisterPage";

describe("Register", () => {
  let user;

  before(() => {
    user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number(),
    };
    cy.writeFile("cypress/fixtures/user.json", user);
  });

  it("should register a new user", () => {
    cy.fixture("user").then((user) => {
      RegisterPage.visit();
      RegisterPage.signup(user.name, user.email);
      RegisterPage.fillAccountForm(user);
      cy.contains("Account Created!").should("be.visible");
      cy.get('[data-qa="continue-button"]').click();
      RegisterPage.verifyLoggedIn(user.name); 
      cy.session('userSession', () => {});
      cy.screenshot("register new user")
    });
  });

  it("should show error when registering with existing email", () => {
    cy.fixture("user").then((user) => {
      RegisterPage.visit();
      RegisterPage.signup(user.name, user.email);
      RegisterPage.checkEmailExistsError(); 
      cy.screenshot("error registering")
    });
    
  });
});