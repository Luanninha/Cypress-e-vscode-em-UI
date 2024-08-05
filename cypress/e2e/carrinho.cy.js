describe('Teste de Carrinho de Compras', () => {
  it('Deve realizar login e adicionar itens ao carrinho', () => {
    // Visitar a página inicial
    cy.visit('http://www.automationpractice.pl/index.php');

    // Clicar no botão de login
    cy.get('.login').click();

    // Inserir email e senha cadastrados
    cy.get('#email').type('vitoriaanalufogaca@claro.com.br');
    cy.get('#passwd').type('SenhaSegura123');

    // Clicar no botão de login
    cy.get('#SubmitLogin > span').click();

    // Clicar no botão "Women"
    cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click();
  
    // Clicar no vestido de verão
    cy.get(':nth-child(5) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click();

    // Clicar para escolher a cor do vestido
    cy.get('#color_11').click();

    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul');
   

    // Clicar para adicionar ao carrinho
    cy.get('#color_11').click();
    cy.get('.exclusive > span').click();

    //Clicar para continuar comprando
    cy.get('.continue > span').click();

    // Clicar em "Dresses"
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();

    // Clicar no vestido estampado
    cy.get('.product_list.grid.row > :nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click();

    // Clicar na cor 
    cy.get('#color_24').click();


    // Adicionar ao carrinho
    cy.get('.exclusive > span').click();

    //Clicar para continuar comprando
    cy.get('.continue > span').click();

    // Clicar em "T-shirts"
    cy.get('.sf-menu > :nth-child(3) > a').click();

    //Verifica  que não tem em estoque
    cy.get('.product_img_link > .replace-2x').click();
  
    // Clicar no carrinho de compras
    cy.get('[title="View my shopping cart"]').click();

    //Clicar no checkout de compras
    cy.get('.cart_navigation > .button > span').click();

    //Preencher dados para seguir com compra só a primeira vez
    //cy.get('#company').type('Visa');
    //cy.get('#address1').type('Rua dos Milagres, 451');
    //cy.get('#address2').type('ap 23');
    //cy.get('#city').type('New Jersey');
    //cy.get('#id_state').select('Alabama');
    //cy.get('#postcode').type('14013');
    //cy.get('#phone').type(6777788);
    //cy.get('#phone_mobile').type(33333333);
    //cy.get('#other').type('Tudo OK');
    //cy.get('#alias').type('My address');
    //cy.get('#submitAddress > span').click();

    //Prosseguir com Checkout
    cy.get('.cart_navigation > .button > span').click();

    //Aceitar os termos 
    cy.get('#cgv').click(); 

    //Prosseguir
    cy.get('.cart_navigation > .button > span').click();

    //Escolher forma de pagamento
    cy.get('.cheque').click();

    //Confirmar Ordem de Pagamento
    cy.get('#cart_navigation > .button > span').click();

    //Validar Mensagem de Confirmação
    cy.get('.alert').should('have.text', 'Your order on My Shop is complete.');
    
  });
});
