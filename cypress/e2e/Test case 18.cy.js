describe('template spec', () => {
  it('Test Case 18: View Category Products', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.left-sidebar > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    cy.get('.title').should('be.visible');
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
    cy.get('section > .container').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})