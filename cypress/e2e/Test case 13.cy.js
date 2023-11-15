describe('template spec', () => {
  it('Test Case 13: Verify Product quantity in Cart', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').clear();
    cy.get('#quantity').type('4');
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.get('.disabled').should('have.text', '4');
    /* ==== End Cypress Studio ==== */
  })
})