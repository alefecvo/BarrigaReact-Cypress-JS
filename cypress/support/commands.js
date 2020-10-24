// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Declarando locators
import loc from './locators'

//Comando criado para interagir com alertas no sistema
Cypress.Commands.add('clickAlert', (locator, message)=>{
        cy.get(locator).click()
        cy.on('window:alert',msg =>{
            console.log(msg)
            expect(msg).to.be.equal(message)
        })
})

//Comando criado para resetar dados da tela para estado inicial
Cypress.Commands.add('resetApp', ()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})

//Criando funcao para acessa menu, opcao e tela inicial
Cypress.Commands.add('goToMenuHome', ()=>{
    //Chamando funcao para reseta dados dos banco
    cy.get(loc.MENU.HOME).click()
})

//Criando funcao para acessa menu, opcao e tela conta
Cypress.Commands.add('goToMenuAccount', ()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

//Criando funcao para acessa menu, opcao e tela extrato
Cypress.Commands.add('goToMenuExtract', ()=>{
    cy.get(loc.MENU.EXTRATO).click()
})

//Criando funcao para acessa menu, opcao e tela transacao (movimentacao)
Cypress.Commands.add('goToMenuTransaction', ()=>{
    cy.get(loc.MENU.MOVIMENTACAO).click()
})

