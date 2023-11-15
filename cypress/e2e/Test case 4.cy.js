describe('Test Skenario', () => {
  it('Test Case 4 Logout', () => {
    cy.visit('https://www.automationexercise.com/');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('maretarosa06@gmail.com');
    cy.get('[data-qa="login-email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="login-password"]').clear('mareta');
    cy.get('[data-qa="login-password"]').type('mareta12');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */

  })
})