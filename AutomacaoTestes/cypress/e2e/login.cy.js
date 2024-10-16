/// <reference types="cypress"/>

describe('Login', () => {

    it('Login com sucesso', () => {
        
        cy.visit('https://automationpratice.com.br/login') // Acessar a tela de login
        cy.get('#user').type('vinicius@gmail.com') // Digitar email
        cy.get('#password').type('123456') // Digitar senha
        cy.get('#btnLogin').click() // Clicar no botão em login
        cy.get('#swal2-title').should('have.text', 'Login realizado') // Validação
        //cy.wait(3000) // Aguardar 3 segundos
    })

    it('Login com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius@gmail.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        //cy.wait(3000)
    })

    it('Login com e-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        //cy.wait(3000)
    })

    it('Login com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius@gmail.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        //cy.wait(3000)
    })
})