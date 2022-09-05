import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils'

describe('Treat Streets Map user flows', () => {
    beforeEach(() => {
        cy.intercept('POST', 'https://treat-streets-be.herokuapp.com/graphql', (req) => {
        aliasQuery(req, 'Locations')
        if (hasOperationName(req, 'Locations')) {
            req.reply({
                fixture: 'locations.json'
            })
        }
    })
        cy.visit('http://localhost:3000/')
        cy.contains('View Treat Streets').click()
    })

    it('should show map with all current locations', () => {
        cy.url().should('eq', 'http://localhost:3000/Map')
    })
})