/// <reference types="cypress"/>

//Declarando locators e imports
import '../../support/commands'
import '../../support/commandsLogin'
import '../../support/commandsAccount'
import credentials from '../../support/credentials'

describe('Should account test', () =>{
    //Recebendo dados das credenciais
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

    //Cenário - Criar uma nova conta
    it('Should create an account',()=>{
        //Chamando funcao para acessar menu, opcao e tela de conta
        cy.goToMenuAccount()

        //Chamando funcao para inserir conta e salvar
        cy.insertAccount('Conta de teste')

        //Validando conta criada
        cy.validateAlertAcountByText('Conta inserida')
  
    })

    //Cenário - Editar uma conta existente
    it('Should update an account',()=>{
        //Chamando funcao para acessar menu, opcao e tela de conta
        cy.goToMenuAccount()

        //Chamando funcao para editar conta
        cy.editAccount('Conta para alterar','Conta alterada')
    
        //Validando conta editada
        cy.validateAlertAcountByText('Conta atualizada')
    
    })

    //Cenário - Criar uma conta com o mesmo nome de uma existente
    it('Should not create an account with same name', ()=>{
        //Chamando funcao para acessar menu, opcao e tela de conta
        cy.goToMenuAccount()

        //Chamando funcao para inserir conta e salvar
        cy.insertAccount('Conta mesmo nome')

        //Validando tentativa de criar conta com mesmo nome
        cy.validateAlertAcountByText('code 400')
  
    })
})