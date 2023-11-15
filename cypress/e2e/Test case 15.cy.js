describe('Test Skenario', () => {
  it('Test Case 15: Place Order: Register before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('[data-qa="signup-name"]').type('maretarosa');
    cy.get('[data-qa="signup-email"]').type('maretarosaa@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('mareta');
    cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('3');
    cy.get('[data-qa="years"]').select('2002');
    cy.get('#newsletter').check();
    cy.get('[data-qa="first_name"]').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Mareta');
    cy.get('[data-qa="first_name"]').type('Rosa');
    cy.get('[data-qa="last_name"]').type('Anjellina');
    cy.get('[data-qa="company"]').type('Indonesia');
    cy.get('[data-qa="address"]').type('Tuban');
    cy.get('[data-qa="address2"]').type('Tuban');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="company"]').type('Zelixir');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').type('malang');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('0821536846104');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(10) > a').should('have.text', ' Logged in as maretarosa');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get(':nth-child(4) > .heading').should('be.visible');
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('mareta');
    cy.get('[data-qa="name-on-card"]').type('mareta');
    cy.get('[data-qa="card-number"]').clear('12');
    cy.get('[data-qa="card-number"]').type('12345678');
    cy.get('[data-qa="cvc"]').clear('61');
    cy.get('[data-qa="cvc"]').type('619');
    cy.get('[data-qa="expiry-month"]').clear('03');
    cy.get('[data-qa="expiry-month"]').type('03');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2002');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('b').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})