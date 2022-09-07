import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils'

describe('Treat Streets Map user flows', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

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

    it('should be able to click a marker and see a house preview', () => {
        cy.get('.map-container').find('[data-cy="location-pin"]').should('have.length', 4)
        cy.get('[data-cy="location-pin"]').eq(1).click()
        cy.get('[data-cy="popup-address"]').should('be.visible').and('contain', '1816 S Newton St')
        cy.get('[data-cy="popup-times"]').should('contain', '4:00 pm - 7:00 pm')
        cy.get('[data-cy="popup-image"]').should('be.visible')
        cy.get('[data-cy="location-profile-btn"]').should('be.visible')
    })

    it('should be able to click View Full Profile button and see a preview page', () => {
        cy.get('[data-cy="location-pin"]').eq(1).click()
        cy.get('[data-cy="location-profile-btn"]').should('be.visible').click()
        cy.url().should('eq', `http://localhost:3000/PopUp/2`)
        cy.get('[data-cy="popup-page-container"]').should('be.visible')
            .and('contain', "1816 S Newton St")
            .and('contain', "Denver")
            .and('contain', "CO")
            .and('contain', "80219")
            .and('contain', "We don't like to scare kids!")
        cy.get('.back-button').should('be.visible').click()
        cy.url().should('eq', `http://localhost:3000/Map`)
    })
    
    it('should be able to click Home button and return to homepage', () => {
        cy.contains('Home').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})