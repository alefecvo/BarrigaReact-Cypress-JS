//Declarando locators
import loc from './locators'

//Comando criado para validar saldo atraves o texto e valor do alerta
Cypress.Commands.add('validateDataListByTextAndValue', (descricao, valor)=>{
    //Chamando funcao e validando saldo da conta
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA(descricao)).should('contain', valor)
})

//Comando criado para validar saldo atraves o texto do alerta
Cypress.Commands.add('validateAlertTransactionByText', (text)=>{
    cy.get(loc.MESSAGE).should('contain', text)
})