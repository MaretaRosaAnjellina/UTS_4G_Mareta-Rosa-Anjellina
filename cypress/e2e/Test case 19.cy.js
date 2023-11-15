describe('template spec', () => {
  it('Test Case 19: View & Cart Brand Products', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.brands_products > h2').should('be.visible');
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    cy.get('.title').should('be.visible');
    cy.get('.brands-name > .nav > :nth-child(2) > a').click();
    cy.get('section > .container').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})