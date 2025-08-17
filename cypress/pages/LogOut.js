class LogOut{
    
    visit(){
        cy.visit("https://automationexercise.com/")
    }

    logOut(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }


    verifyLogOut(){
        cy.contains("Login to your account").should("be.visible")
    }

}
export default new LogOut();