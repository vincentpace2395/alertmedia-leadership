/// <reference types="cypress" />
import HomePage from '../pages/homePage'

const home = new HomePage

beforeEach(() => {
    cy.visit('/')
})

it('Verify top google search result is the official reddit site', function() {
    home.visitAboutUsPage()
        .openTeamPage()
        .getLeadershipTeamMembers()
})
