/// <reference types="cypress" />
describe('Cadastro de produtos', () => {
    it('CT001 - Deve realizar o cadastro do produto com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/usuarios',
        body: {
          nome: 'Logitech MX Vertical',
          preco: '470',
          descricao: 'Mouse',
          quantidade: '10'
        }
      }).then((response) => {
        // Valida se o status da resposta é 200
        expect(response.status).to.eq(200);
      });
    });
  });