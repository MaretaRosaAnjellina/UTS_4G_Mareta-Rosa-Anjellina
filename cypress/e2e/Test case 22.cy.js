describe('template spec', () => {
  it('Test Case 22: Add to cart from Recommended items', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.wait(3000)
    cy.get('.recommended_items > .title').scrollIntoView()
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})