describe('Test Skenario', () => {
  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(5) > span').should('be.visible')
    cy.get('.product-information > :nth-child(6)').should('be.visible')
    cy.get('.product-information > :nth-child(7)').should('be.visible')
    cy.get('.product-information > :nth-child(8)').should('be.visible')
  })
})