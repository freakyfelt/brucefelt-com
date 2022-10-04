describe('home page', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByTestId('h-recent').should('have.text', 'Recent Posts')
  })
})
