describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.scrollTo('bottom')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.single-widget > h2').should('be.visible');
    cy.get('#scrollUp').click();
    cy.get('.active > :nth-child(1) > h2').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})