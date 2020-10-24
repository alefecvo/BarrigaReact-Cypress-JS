//Declarando locators
import loc from './locators'
import '../support/commands'

//Comando criado para inserir transacao (movimentacao)
Cypress.Commands.add('insertTransaction', (descricao, valor, interessado, conta)=>{
    cy.goToMenuTransaction()

    //Preenchendo campos, salvando e validando uma movimentacao
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type(descricao)
    cy.get(loc.MOVIMENTACAO.VALOR).type(valor)
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type(interessado)
    cy.get(loc.MOVIMENTACAO.CONTA).select(conta)
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
})

//Comando criado para editar transacao (movimentacao)
Cypress.Commands.add('editStatusTransaction', ()=>{        
    //Preenchendo campo, salvando e validando
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.wait(1000)
})

//Comando criado para inserir transacao (movimentacao)
Cypress.Commands.add('deleteTransaction', (descricao)=>{
    //Chamando funcao para acessar menu, opcao e tela de extrato
    cy.goToMenuExtract()
    //Removendo registro de extrato
    cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO(descricao)).click()
})

//Comando criado para validar editar transacao, recuperando do gri de resultado, atraves do
Cypress.Commands.add('findAndClickEditDataListByText', (descricao)=>{
    //Chamando funcao para acessar menu, opcao e tela de movimentacao
    cy.goToMenuExtract()
    //Chamando funcao e validando saldo da conta
    cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO(descricao)).click()
    //Verificando se o campo realmente foi preenchido
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', descricao)
})

//Comando criado para validar transacao atraves o texto do alerta
Cypress.Commands.add('validateAlertTransactionByText', (text)=>{
    cy.get(loc.MESSAGE).should('contain', text)
})

//Comando criado para validar transacao por quantidade de items
Cypress.Commands.add('validateTransactionByCountItems', (qtdItem)=>{
    cy.get(loc.EXTRATO.LINHAS).should('have.length',qtdItem)
})

//Comando criado para validar transacao por descricao e valor
Cypress.Commands.add('validateTransactionByDescAndValue', (descricao, valor)=>{
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO(descricao,valor)).should('exist')
})


 