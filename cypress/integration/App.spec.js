describe('Basic interface tests', () => {
  it('Open Article from list', () => {
    cy.visit('/')
    cy.get('input').type('fashion').blur()
    cy.get('button').first().click()
    // Checing that page opened -> has "full article" button inside
    cy.contains('Full Article')
  })

  it('Open root page', () => {
    cy.visit('/')
    // Should load at least one article
    cy.get('button')
  })

  it('Type search term, blur input and check url', () => {
    cy.visit('/')
    cy.get('input').type('facebook').should('have.value', 'facebook').blur()
    // Should change url
    cy.url().should('include', '/topic/facebook')
  })

  it('Open search with empty results', () => {
    cy.get('input').type('abracadabra228').blur()
    // Should load "Nothing found" page
    cy.contains('Nothing found...')
  })
})
