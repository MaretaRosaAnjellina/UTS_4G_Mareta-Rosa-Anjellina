describe('template spec', () => {
  it('Test Case 17: Remove Products From Cart', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.cart_quantity_delete > .fa').click();
    cy.get('#empty_cart').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})