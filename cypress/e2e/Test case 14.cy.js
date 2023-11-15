describe('template spec', () => {
  it('Test Case 14: Place Order: Register while Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('mareta');
    cy.get('[data-qa="signup-name"]').type('maretarosa');
    cy.get('[data-qa="signup-email"]').clear();
    cy.get('[data-qa="signup-email"]').type('maretarosa@gmail.com');
    cy.get('[data-qa="signup-email"]').clear('maretarosa06@gmail.com');
    cy.get('[data-qa="signup-email"]').type('maretarosa06@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('mareta');
    cy.get('[data-qa="password"]').type('mareta12');
    cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('3');
    cy.get('[data-qa="years"]').select('2002');
    cy.get('form > :nth-child(7)').click();
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('mareta');
    cy.get('[data-qa="first_name"]').type('maretarosa');
    cy.get('[data-qa="last_name"]').clear();
    cy.get('[data-qa="last_name"]').type('anjellina');
    cy.get('[data-qa="company"]').clear('in');
    cy.get('[data-qa="company"]').type('indo');
    cy.get('[data-qa="address"]').clear('Tuban');
    cy.get('[data-qa="address"]').type('Tuban');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('indo');
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').clear('malang');
    cy.get('[data-qa="city"]').type('malang');
    cy.get('[data-qa="zipcode"]').clear('142311');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('08');
    cy.get('[data-qa="mobile_number"]').type('0891231511312');
    cy.get('[data-qa="address2"]').clear('Tuban');
    cy.get('[data-qa="address2"]').type('Tuban');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as maretarosa');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order');
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('mareta');
    cy.get('[data-qa="name-on-card"]').type('maretarosa');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('6');
    cy.get('[data-qa="cvc"]').type('619');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('08');
    cy.get('[data-qa="expiry-year"]').clear();
    cy.get('[data-qa="expiry-year"]').type('2002');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('b').should('have.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})