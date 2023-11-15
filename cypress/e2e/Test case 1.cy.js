describe('Test Skenario', () => {
  it('Test Case 1: Register User', () => {
    cy.visit('https://www.automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('[data-qa="signup-name"]').type('mareta');
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
    cy.get('[data-qa="city"]').type('probolinggo');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('0821536846104');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();

  });
});