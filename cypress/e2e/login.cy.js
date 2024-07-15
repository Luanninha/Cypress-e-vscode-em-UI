/// <reference types="cypress" />

describe('Login Válido', () => {
    it('Deve realizar login com sucesso', function() {
      // Visitar a página inicial
      cy.visit('https://www.automationpractice.pl/index.php');
      
      // Clicar no botão de login
      cy.get('.login').click();
      
      // Inserir email e senha cadastrados
      cy.get('#email').type('vitoriaanalufogaca@claro.com.br');
      cy.get('#passwd').type('SenhaSegura123');
      
      // Clicar no botão de login
      cy.get('#SubmitLogin > span').click();
      
      // Verificar se o login foi realizado com sucesso
      cy.get('.account > span').should('be.visible');
     });
  });
  