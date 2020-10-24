/// <reference types="cypress"/>

//Declarando locators e imports
import '../../support/commands'
import '../../support/commandsLogin'
import '../../support/commandTransaction'
import '../../support/commandsBalance'
import credentials from '../../support/credentials'

describe('Should balance test', () =>{
       //Recebendo dados das credenciais
    let user = credentials.user
    let password = credentials.password
    
    //Realizar login e resetar página para estado inicial
    before(()=>{
        //Chamando funcao para realizar autenticacao
        cy.doLogin(user,password)
    })

    beforeEach(() =>{
        //Chamando funcao para reseta dados dos banco
        cy.resetApp()
    })

    //Cenário - Consultar saldo de conta
    it('Should edit balance', ()=>{
        //Chamando funcao e validando saldo da conta
        cy.findAndClickEditDataListByText('Movimentacao 1, calculo saldo')
             
        //Alterando status da transaao e salvando
        cy.editStatusTransaction()

        //Validar transacao atraves o texto do alerta
        cy.validateAlertTransactionByText('sucesso')

        //Chamando funcao para acessar menu, opcao e tela de movimentacao
        cy.goToMenuHome()

         //Chamando funcao e validando saldo da conta
         cy.validateDataListByTextAndValue('Conta para saldo','4.034,00')
    })

    //Cenário - Consultar saldo de conta
    it('Should get balance', ()=>{
        //Chamando funcao para acessar menu, opcao e tela de movimentacao
        cy.goToMenuHome()

        //Chamando funcao e validando saldo da conta
        cy.validateDataListByTextAndValue('Conta para saldo','534,00')
    })
})