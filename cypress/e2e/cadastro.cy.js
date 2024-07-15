/// <reference types="cypress" />

describe('Cadastro Válido', () => {
  // Declare variáveis úteis para o teste
  const baseUrl = 'https://www.automationpractice.pl/index.php';
  const email = 'vitoriaanalufogaca@claro.com.br';
  const lastName = 'Sophie Fogaça';
  const firstName = 'Vitória Analu ';
  const password = 'SenhaSegura123';
  const birthDay = '1';
  const birthMonth = 'January'; // Janeiro
  const birthYear = '2000';

  it('Deve realizar um cadastro válido', function() {
      cy.visit(baseUrl);

      // Clicar no botão de login/criação de conta
      cy.get('.login').click();

      // Inserir email e clicar no botão para criar conta
      cy.get('#email_create').type(email);
      cy.get('#SubmitCreate > span').click();

      // Esperar até que o formulário de criação de conta esteja presente
      cy.get('#id_gender2', { timeout: 15000 }).should('be.visible');

      // Selecionar o gênero
      cy.get('#id_gender2').click();

      // Preencher os campos do formulário
      cy.get('#customer_lastname').type(lastName);
      cy.get('#customer_firstname').type(firstName);
      cy.get('#passwd').type(password);

      // Selecionar o dia de nascimento
      cy.get('#days').select(birthDay);

       
      // Selecionar o mês de nascimento
      cy.get('#months').select(birthMonth);

      // Selecionar o ano de nascimento
      cy.get('#years').select(birthYear);

      // Selecionar a opção de newsletter
      cy.get('#newsletter').click();

      // Enviar o formulário de criação de conta
      cy.get('#submitAccount > span').click();
  });
});
