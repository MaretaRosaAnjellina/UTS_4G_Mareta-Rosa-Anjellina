describe('Test Skenario', () => {
  it('Test Case 7: Verify Test Cases Page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click();
  })
})