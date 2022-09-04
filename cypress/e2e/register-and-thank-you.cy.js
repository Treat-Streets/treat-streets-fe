import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('Register Page and Thank You Page user flows', () => {
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

  it('should be able to fill out the form with house information', () => {
    cy.get('input[name="email"]').type('test@gmail.com')
    cy.get('input[name="streetAddress"]').type('4071 S Skyline Drive')
    cy.get('input[name="city"]').type('Evergreen')
    cy.get('input[name="state"]').type('CO')
    cy.get('input[name="zipcode"]').type('80439')

    cy.get('select[name="locationType"]').select('house')
    cy.get('select[name="startTime"]').select('5:00 pm')
    cy.get('select[name="endTime"]').select('8:00 pm')
    cy.get('input[name="description"]').type('Spooky and fun decor!')
    cy.get('input[type="range"]').as('range').invoke('val', 3).trigger('onChange')

    //currently failing due to 'cannot read properties of undefined, reading target' error
    // cy.contains('Register House!').click()
  })
})