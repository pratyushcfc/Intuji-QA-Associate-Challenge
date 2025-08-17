class CheckOutPage{
    visit(){
        cy.visit('https://automationexercise.com/checkout')
    }

    placeOrder(){
        cy.get("body").contains("Place Order").click()
    }

    fillCardDetails(name, cardnum, cvc, month, year){
        cy.get('input[data-qa="name-on-card"]').type(name)
        cy.get('input[data-qa="card-number"]').type(cardnum)
        cy.get('input[data-qa="cvc"]').type(cvc)
        cy.get('input[data-qa="expiry-month"]').type(month)
        cy.get('input[data-qa="expiry-year"]').type(year)
    }

    pay(){
        cy.get('[data-qa="pay-button"]').click()
    }

    verifyOrder(){
        cy.contains("Congratulations! Your order has been confirmed!").should("be.visible")
    }
    
}

export default new CheckOutPage();