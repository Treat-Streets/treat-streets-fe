import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('Treat Streets', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://treat-streets-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'locations')
      aliasMutation(req, 'createLocation')
    })
    cy.visit('http://localhost:3000/')
  })

  it('should render all Landing Page contents, including welcome message, gif and buttons', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.welcome-header').contains('h2', 'TREAT STREETS')
    cy.get('p').should('have.text', 'You can find houses passing out candy for Halloween in your area or add your home to the treat streets map.')

    cy.get('.landing-image').should('have.attr', 'src').should('include', '/static/media/loadingGif.e9e6f9ad2d180d0a8430.gif')

    cy.get('.landing-page-buttons-container').find('button').should('have.length', '2')

    cy.get('button').first().contains('Register Your House')
    cy.get('button').last().contains('View Treat Streets')
  })

  it('should be able to click on Register Your House button and be brought to the Register page', () => {
    cy.contains('Register Your House').click()

    cy.url().should('include', '/Register')
  })

  it('should be able to click on View Treat Streets button and be brought to the Map page', () => {
    cy.contains('View Treat Streets').click()

    cy.url().should('include', '/Map')
  })
})