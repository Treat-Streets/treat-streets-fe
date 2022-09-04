import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('Map Page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://treat-streets-be.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'locations')
      aliasMutation(req, 'createLocation')
      if (hasOperationName(req, 'locations')) {
        req.alias = 'gqllocationsQuery'
        req.reply({
          fixture: "locations"
        })
      }
    })
    cy.visit('http://localhost:3000/')
    cy.contains('View Treat Streets').click()
    cy.url().should('include', '/Map')
  })

    it('should display Loading message and gif while content is loading', () => {
    cy.get('.loading-container').contains('p', 'Loading...')
    cy.get('.loading-gif').should('have.attr', 'src').should('include', '/static/media/pumpkin.d74dc1ee5efafdfa23e5.gif')
  })


})