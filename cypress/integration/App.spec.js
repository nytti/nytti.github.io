describe('Basic interface tests', () => {
  it('Open Article from list', () => {
    cy.visit('/topic/fashion')
    cy.get('button').first().click()
    // Checing that page opened -> has "full article" button inside
    cy.contains('Full Article')
  })

  it('Open root page', () => {
    cy.visit('/')
    cy.get('button')
  })

  it('Type search term, blur input and check url', () => {
    cy.visit('/')
    cy.get('input').type('facebook').should('have.value', 'facebook').blur()
    cy.url().should('include', '/topic/facebook')
  })

  it('Open search with empty results', () => {
    cy.visit('/topic/abracadabra228')
    cy.contains('Nothing found...')
  })
})
