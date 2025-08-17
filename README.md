Intuji QA Associate Challenge
This repository contains the solution for the Intuji QA Associate Challenge, automating a complex user flow on automationexercise.com using Cypress. The automation covers user registration, product browsing and filtering, cart management, checkout with fake payment, and session validation, with an emphasis on reusability, modularity, and error handling. Bonus challenges, such as Page Object Model (POM), custom commands, and fixture file have been implemented.

Setup Steps

Prerequisites:

Node.js 
Git
A code editor 

Install Tools/Plugins:

Cypress: cypress
Faker.js: @faker-js/faker (for generating random user data)
Cypress Visual Testing: cypress-image-snapshot (for visual screenshot comparisons)

How to Run Tests

Open Cypress Test Runner:
npx cypress open

Select "E2E Testing" and choose a browser (e.g., Chrome).
Run the test 

Run Tests in Headless Mode:
npx cypress run

Tools and Plugins Used

Cypress: End-to-end testing framework.
@faker-js/faker: Generates random user data for registration.
Google Sheets: Test cases are documented in a Google Sheet (https://docs.google.com/spreadsheets/d/13jZ2hSM2-qlZ1WJ28KFgRuB4GlUNPbHrgnbM3SRPuF4/edit?usp=sharing).

Key Features Implemented

User Registration & Session Handling:
Registers a new user with random details using Faker.js.
Handles email uniqueness by checking for existing email errors.
Verifies login state and stores session cookies for reuse.

Product Browsing & Filtering:
Navigates to the Products page and filters by Women > Dress.
Verifies filtered products contain expected keywords.
Validates product details (name, price, availability).

Cart and Quantity Management:
Adds multiple products from different categories to the cart.
Updates quantity of one item to 3 and verifies total.
Removes a product and confirms cart updates.

Checkout Flow:
Proceeds to checkout, auto-fills address, and enters fake card details.
Validates order confirmation message.

Logout and Re-login:
Logs out and logs back in, verifying user state preservation.

Bonus Challenges:
Implemented Page Object Model for all pages.
Created custom commands.
Used fixture files for test data.
Used before/beforeEach hooks to set up tests and avoid redundancy.
