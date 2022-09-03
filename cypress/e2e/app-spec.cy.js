import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('App', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://treat-streets-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'locations')
      aliasMutation(req, 'createLocation')
    })
    cy.visit('http://localhost:3000/')
  })

  it ('should render landing page contents', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.welcome-header').contains('h2', 'TREAT STREETS')
    cy.get('p').should('have.text', 'You can find houses passing out candy for Halloween in your area or add your home to the treat streets map.')

    cy.get('.landing-page-buttons-container').find('button').should('have.length', '2')

    cy.get('button').first().contains('Register Your House')
    cy.get('button').last().contains('View Treat Streets')
  })
})