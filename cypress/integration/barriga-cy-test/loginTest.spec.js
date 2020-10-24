/// <reference types="cypress"/>

//Declarando locators e imports
import '../../support/commandsLogin'
import credentials from '../../support/credentials'

describe('Should test auth', () =>{
   //Recebendo dados das credenciais
    let user = credentials.user
    let password = credentials.password

    //Cenário - Realizar login
    it('Should login',()=>{
        //Chamando funcao para fazer autenticacao
        cy.doLogin(user,password)

        //Validando login com sucesso
        cy.validateAlertLoginByText('Bem vindo')
    })
})