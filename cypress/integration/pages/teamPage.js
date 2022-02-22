
class TeamPage {

    data = []

    leadershipTeam = '.about-us-team-leadership-list'
    teamMemberName = '.about-us-team-leadership-list-name'
    teamMemberTitle = '.about-us-team-leadership-list-title'

    getLeadershipTeamMembers() {

        cy.get('.about-us-team-leadership .about-us-team-leadership-list')
        .find('ul li').then(member => {
            const memberCount = Cypress.$(member).length
            for (let i = 1; i <= memberCount; i++) {
                cy.get('.about-us-team-leadership .about-us-team-leadership-list ul li:nth-child(' + i + ') .about-us-team-leadership-list-name').then(name => {
                    this.data.push(name.text())
                })
                cy.get('.about-us-team-leadership .about-us-team-leadership-list ul li:nth-child(' + i + ') .about-us-team-leadership-list-title').then(title => {
                    this.data.push(title.text())
                })
            }
            this.writeInfoToCSV(this.data)
        })
    }

    writeInfoToCSV(info) {
        cy.writeFile('cypress/fixtures/leadershipTeam.csv', info).then(() => {
            this.validateContentsOfCSV()
        })
            
        return this
    }

    validateContentsOfCSV() {
        this.data.map(value => {
            cy.readFile('cypress/fixtures/leadershipTeam.csv').should('contain', value)
        })
    }
    
}

export default TeamPage