describe('template spec', () => {
  it('Test Case 20: Search Products and Verify Cart After Login', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.title').should('be.visible');
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img').click();
    cy.get('#search_product').type('men');
    cy.get('#submit_search').click();
    cy.get('.title').should('be.visible');
    cy.get('.features_items').should('be.visible');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('maretarosa@gmail.com');
    cy.get('[data-qa="login-email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="login-password"]').clear('mareta');
    cy.get('[data-qa="login-password"]').type('mareta12');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})