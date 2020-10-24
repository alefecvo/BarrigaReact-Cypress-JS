//Declarando locators
import loc from './locators'

//Comando criado para realizar login no sistema
Cypress.Commands.add('doLogin', (user, password)=>{
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
})

//Comando criado para validar login atraves o texto do alerta
Cypress.Commands.add('validateAlertLoginByText', (text)=>{
    cy.get(loc.MESSAGE).should('contain', text)
})