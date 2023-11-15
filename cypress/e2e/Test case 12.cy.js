describe('template spec', () => {
  it('Test Case 12: Add Products in Cart', () => {
    cy.visit('https://www.automationexercise.com/')


    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})