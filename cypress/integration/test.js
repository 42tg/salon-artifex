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
    })

    it("visit Preise", () => {
        cy.get("#btPrices").click()
        cy.contains("Dienstleistungen")
    })

    it("visit Preise", () => {
        cy.get("#btPhotos").click()
        cy.contains("Video")
    })

    it("visit impressum", () => {
        cy.get("#btImpressum").click()
        cy.contains("IMPRESSUM")
    })
})
