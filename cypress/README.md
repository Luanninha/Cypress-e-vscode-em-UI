Automação de Testes com Cypress
Descrição
Este projeto contém testes automatizados para o site de exemplo Automation Practice utilizando o Cypress e Node.js. O objetivo é realizar testes de cadastro, login e carrinho de compras para garantir que todas as funcionalidades estejam funcionando corretamente.

Estrutura do Projeto
cypress/
e2e/
cadastro.cy.js - Testes de cadastro de usuário.
login.cy.js - Testes de login de usuário.
carrinho.cy.js - Testes de adição de itens ao carrinho e checkout.
fixtures/
example.json - Dados de exemplo utilizados nos testes.
support/
commands.js - Comandos customizados do Cypress.
e2e.js - Configurações globais e comandos do Cypress.
cypress.config.js - Configurações gerais do Cypress.
package.json - Dependências e scripts do projeto.

Dependências
Este projeto utiliza as seguintes dependências:

Cypress: Framework para automação de testes end-to-end.
mochawesome: Relatório de teste para o Cypress.

Para instalar as dependências, execute:
npm install

Scripts
npm test: Executa os testes do Cypress.
npm run cypress:open: Abre o Cypress em modo interativo para depuração e execução de testes.

Testes
Cadastro Válido
Testa o fluxo de cadastro de um novo usuário com dados válidos.

Login Válido
Testa o fluxo de login com credenciais válidas.

Teste de Carrinho de Compras
Testa o fluxo de adicionar itens ao carrinho e realizar o checkout.

Considerações Finais
Certifique-se de revisar os testes e ajustar os dados conforme necessário. Mantenha os testes atualizados para refletir as mudanças no site de teste e nas funcionalidades.