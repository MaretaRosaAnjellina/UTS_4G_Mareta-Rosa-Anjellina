describe('Test Skenario', () => {
  it('Test Case 9: Search Product', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').type('blue top')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#submit_search').click();
    /* ==== End Cypress Studio ==== */
  })
})