/// <reference types="cypress" />
describe('Login', () => {
    it('CT001 - Deve realizar login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
          email: 'teste@teste.com',
          password: 'Senha123'
        }
      }).then((response) => {
        // Valida se o status da resposta é 200
        expect(response.status).to.eq(200);
      });
    });
  });