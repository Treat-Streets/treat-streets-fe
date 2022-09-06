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

        if (hasOperationName(req, 'Coordinates')) {
            req.reply({
                fixture: 'zipcodeLocations.json'
            })
        }
    })
        cy.visit('http://localhost:3000/')
        cy.contains('View Treat Streets').click()
    })

    it('should show map with all current locations', () => {
        cy.url().should('eq', 'http://localhost:3000/Map')
        cy.get('.map-container').find('[data-cy="location-pin"]').should('have.length', 4)
    })

    it('should be able to view the map and zoom in and out', () => {
            cy.get('.mapboxgl-canvas').should('exist')
            cy.get('.mapboxgl-ctrl-zoom-in > .mapboxgl-ctrl-icon').click()
            cy.get('.mapboxgl-ctrl-zoom-out > .mapboxgl-ctrl-icon').click()
    })

    it('should show a searchbar for the zipcode and a search button', () => {
        cy.get('.search').should('be.disabled')
        cy.get('input[name="zipcode"]').type('80129')
        cy.get('.search').should('not.be.disabled')
        cy.get('.search').click()
        cy.get('.map-container').find('[data-cy="location-pin"]').should('be.visible')
    })
    
    it('should be able to click Home button and return to homepage', () => {
        cy.contains('Home').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})