describe('template spec', () => {
  it('Test Case 16: Place Order: Login before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.login-form > h2').click();
    cy.get('[data-qa="login-email"]').clear('maretarosaa@gmail.com');
    cy.get('[data-qa="login-email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="login-password"]').clear('mareta12');
    cy.get('[data-qa="login-password"]').type('mareta');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('maretarosa');
    cy.get('[data-qa="name-on-card"]').type('maretarosa12');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('61');
    cy.get('[data-qa="cvc"]').type('619');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('03');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2002');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})