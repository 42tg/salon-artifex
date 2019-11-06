/// <reference types="Cypress" />

context("Actions", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("visit home", () => {
        cy.get("#btHome").click()
        cy.contains("Hier dürft Ihr Euch wie zu Hause fühlen!")
    })

    it("visit aktuelles", () => {
        cy.get("#btAktuelles").click()
    })

    it("visit Philosophie", () => {
        cy.get("#btPhilosophie").click()
        cy.contains("Willkommen bei Artifex")
    })

    it("visit Online Buchung", () => {
        cy.get("#btTerminplaner").click()
        cy.contains(
            "Du möchtest auch außerhalb der Öffnungszeiten selbständig einen Termin vereinbaren? Kein Problem! Einfach den Button anklicken, registrieren und Termin vereinbaren. Hast Du noch ein Anliegen? Schreibe uns unter „Bemerkungen”.",
        )
    })

    it("visit Team", () => {
        cy.get("#btTeam").click()
        cy.contains("Team")

        cy.wait(500)

        cy.get('[data-cy=team-franzi]').click()
        cy.contains('Franzi')
        cy.get('[data-cy=team-varina] > .grey').should('be.visible')
        cy.get('[data-cy=team-wanda] > .grey').should('be.visible')
        cy.get('[data-cy=team-lora] > .grey').should('be.visible')

        cy.wait(500)

        cy.get('[data-cy=team-varina] > .grey').click()
        cy.contains('Varina')
        cy.get('[data-cy=team-franzi] > .grey').should('be.visible')
        cy.get('[data-cy=team-wanda] > .grey').should('be.visible')
        cy.get('[data-cy=team-lora] > .grey').should('be.visible')

        cy.wait(500)

        cy.get('[data-cy=team-wanda] > .grey').click()
        cy.contains('Wanda')
        cy.get('[data-cy=team-franzi] > .grey').should('be.visible')
        cy.get('[data-cy=team-varina] > .grey').should('be.visible')
        cy.get('[data-cy=team-lora] > .grey').should('be.visible')

        cy.wait(500)

        cy.get('[data-cy=team-lora] > .grey').click()
        cy.contains('Lora')
        cy.get('[data-cy=team-franzi] > .grey').should('be.visible')
        cy.get('[data-cy=team-varina] > .grey').should('be.visible')
        cy.get('[data-cy=team-wanda] > .grey').should('be.visible')
    })

    it("visit Preise", () => {
        cy.get("#btPrices").click()
        cy.contains("Dienstleistungen")
        cy.get('[data-cy=preise-lightbox]').click()
        cy.get('.ril-inner').click()
    })

    it("visit Anfahrt", () => {
        cy.get("#btAnfahrt").click()
        cy.contains("Parkplätze")
    })
    it("visit Photos", () => {
        cy.get("#btPhotos").click()
        cy.contains("Video")
    })

    it("visit impressum", () => {
        cy.get("#btImpressum").click()

        cy.contains("IMPRESSUM")
    })
})
