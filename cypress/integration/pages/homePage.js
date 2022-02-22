import AboutPage from "./aboutPage"

class HomePage {

    menuBtn = '.hamburger-inner'
    whyAlertMediaBtn = '.has-sub-menu'
    aboutUsBtn = '.nav-secondary-title'

    whyAlertMediaBtnText = 'Why AlertMedia'

    visitAboutUsPage() {
        cy.visit('/about')

        return new AboutPage
    }
}

export default HomePage