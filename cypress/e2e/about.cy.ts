describe('about page', () => {
  it('passes', () => {
    cy.visit('/about')

    cy.findByTestId('h-whoami').should('have.text', 'Who am I?')
  })
})
