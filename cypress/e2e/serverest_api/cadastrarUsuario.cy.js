/// <reference types="cypress" />
describe('Teste de API - Cadastro', () => {
    it('CT001 - Deve realizar o cadastro com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/usuarios',
        body: {
          nome: 'Fulano da Silva',
          email: 'beltrano@qa.com.br',
          password: 'teste123',
          administrador: 'true'
        }
      }).then((response) => {
        // Valida se o status da resposta é 200
        expect(response.status).to.eq(200);
      });
    });
  });