/// <reference types="cypress"/>

//Declarando locators
import '../../support/commands'
import '../../support/commandsLogin'
import '../../support/commandTransaction'
import credentials from '../../support/credentials'

describe('Should transaciton test', () =>{
    
    let user = credentials.user
    let password = credentials.password

    //Realizar login e resetar página para estado inicial
    before(()=>{
        //Chamando funcao para realizar autenticacao
        cy.doLogin(user,password)
        //Chamando funcao para reseta dados dos banco
        cy.resetApp()
    })

    beforeEach(() =>{
        //Chamando funcao para reseta dados dos banco
        cy.goToMenuHome()
    })

    //Cenário - Criar uma nova transacao (movimentacao)
    it('Should create a transaction', ()=>{
        //Chamando funcao para inserir conta e salvar
        cy.insertTransaction('Desc','123', 'Inter','Conta para movimentacoes')

        //Validar transacao atraves o texto do alerta 
        cy.validateAlertTransactionByText('sucesso')
        //Validar transacao por quantidade de items
        cy.validateTransactionByCountItems(7)
        //Validar transacao transacao por descricao e valor
        cy.validateTransactionByDescAndValue('Desc','123')

    })

    //Cenário - Remover uma transacao (movimentacao)
    it('Should remove a transaction', ()=>{
        //Chamando funcao para deletar registro
        cy.deleteTransaction('Movimentacao para exclusao')

        //Validando a exclusao do registro de extrato
        cy.validateAlertTransactionByText('sucesso')
    })
})