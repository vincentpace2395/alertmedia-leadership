import TeamPage from "./teamPage"

class AboutPage {

    teamTab = '#menu-footer-about-us-1 .menu-item'

    teamText = 'Team'

    openTeamPage() {
        cy.get(this.teamTab).contains(this.teamText).click()

        return new TeamPage
    }
}

export default AboutPage