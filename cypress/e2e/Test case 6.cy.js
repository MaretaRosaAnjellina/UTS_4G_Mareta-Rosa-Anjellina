describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')

    // /* ==== Generated with Cypress Studio ==== */
    // cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    // cy.get('[data-qa="name"]').clear('Mareta');
    // cy.get('[data-qa="name"]').type('Mareta');
    // cy.get('[data-qa="email"]').clear('maretarosa@gmail.com');
    // cy.get('[data-qa="email"]').type('maretarosa@gmail.com');
    // cy.get('[data-qa="subject"]').clear('mareta');
    // cy.get('[data-qa="subject"]').type('mareta');
    // cy.get('[data-qa="message"]').click();
    // cy.get(':nth-child(6) > .form-control').click();
    // cy.get('[data-qa="submit-button"]').click();
    // cy.get('span').click();
    // /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('div.contact-form > .title').should('have.text', 'Get In Touch');
    cy.get('[data-qa="name"]').clear('mareta');
    cy.get('[data-qa="name"]').type('mareta');
    cy.get('[data-qa="email"]').clear('maretarosa06@gmail.com');
    cy.get('[data-qa="email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="subject"]').clear('mareta');
    cy.get('[data-qa="subject"]').type('mareta');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    cy.get('span').click();
    /* ==== End Cypress Studio ==== */
  })
})