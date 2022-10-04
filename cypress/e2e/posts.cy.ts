describe('/posts', () => {
  it('passes', () => {
    cy.visit('/posts')

    cy.findByTestId('h-posts').should('have.text', 'Blog Posts')
  })
})
