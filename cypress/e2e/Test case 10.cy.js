describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.scrollTo('bottom')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').type('maretarosa@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})