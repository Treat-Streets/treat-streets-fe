import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('Register Page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://treat-streets-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'locations')
      aliasMutation(req, 'createLocation')
    })
    cy.visit('http://localhost:3000/')
    cy.contains('Register Your House').click()
    cy.url().should('include', '/Register')
  })

  it('should render Register page contents', () => {
    cy.get('.nav-bar').find('.nav-link').contains('h2', 'Home')
    cy.get('.nav-bar').find('.nav-link').contains('h2', 'Map')

    cy.get('.form-title').contains('h2', 'Register to Treat Streets')
    cy.get('.form-description').contains('p', 'Fill out this form to let your Denver area neighbors know you are passing out candy for Halloween!')

    cy.get('form').should('exist')
    cy.get('form').find('input').should('have.length', 8)
    cy.get('form').find('select').should('have.length', 3)

    cy.get('button').should('have.text', 'Register House!')
  })
})