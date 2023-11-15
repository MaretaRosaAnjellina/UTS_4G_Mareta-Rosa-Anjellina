describe('Test Skenario', () => {
  it('Test Case 5: Register User with existing email', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('mareta');
    cy.get('[data-qa="signup-email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
  })
})