describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.scrollTo('bottom')
    cy.get('.single-widget > h2').should('be.visible');
    cy.scrollTo('top')
    cy.get('.active > :nth-child(1) > h2').should('be.visible');
  })
})