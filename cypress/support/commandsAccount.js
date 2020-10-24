//Declarando locators
import loc from './locators'

//Criando funcao para inserir conta e salvar
Cypress.Commands.add('insertAccount', (conta)=>{
    cy.get(loc.CONTAS.NOME)
        .type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR)
        .wait(1000)
        .click()
})

//Criando funcao para editar conta e salvar
Cypress.Commands.add('editAccount', (nomeConta, novoNomeConta)=>{
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR(nomeConta)).click()
    cy.get(loc.CONTAS.NOME)
        .clear()
        .type(novoNomeConta)

    cy.get(loc.CONTAS.BTN_SALVAR).click()
})

//Criando funcao para validar conta atraves o texto do alerta
Cypress.Commands.add('validateAlertAcountByText', (text)=>{
    cy.get(loc.MESSAGE).should('contain', text)
})


 