// cypress/plugins/index.js

// Exemplo de registro de comando customizado no Cypress
// Este é um arquivo opcional para definir plugins do Cypress.
// Você pode adicionar comandos customizados ou realizar configurações globais aqui.

// Exemplo de registro de comando customizado para login
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });
  
  // Exporta o arquivo de plugins
  module.exports = (on, config) => {
    // Configurações de plugins podem ser definidas aqui
  };
  