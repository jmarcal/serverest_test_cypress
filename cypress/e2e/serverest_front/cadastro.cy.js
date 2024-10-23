/// <reference types="cypress" />
context('login', () => {
    beforeEach(() => {
      cy.visit('https://front.serverest.dev/login')
    })

    it('CT001 - Realizar o cadastro com sucesso', () => {
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('[data-testid="nome"]').type('Teste QA')
      cy.get('[data-testid="email"]').type('testeeeeee@teste.com')
      cy.get('[data-testid="password"]').type('Senha123')
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    })

    it('CT002 - Realizar o cadastro com e-mail já cadastrado', () => {
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type('Teste QA')
        cy.get('[data-testid="email"]').type('testeee@teste.com')
        cy.get('[data-testid="password"]').type('Senha123')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert').should('contain', 'Este email já está sendo usado')
      })

    it('CT003 - Realizar login com sucesso', () => {
        cy.get('[data-testid="email"]').type('testeee@teste.com')
        cy.get('[data-testid="senha"]').type('Senha123')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="logout"]').click()
      })

  })