/// <reference types="cypress" />

describe("order", () => {
    beforeEach(() => {
        cy.visit("")
    })

    it("get products into my items", () => {
        cy.contains("START LOOKING")
        expect("/products")
        cy.get('[href="/products/1"] > .images').should("be.visible").click()
        expect("/products/1")
        cy.get('.box')
        expect("RENT MODAL")
        cy.get('.v-btn').should("be.visible").click()
        cy.get(':nth-child(2) > :nth-child(5) > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(3) > :nth-child(4) > .v-btn > .v-btn__content').click()
        cy.get('.my-10 > .v-btn__content').click()
        cy.get('.v-main__wrap > .v-card')
        expect("My Items")
        cy.get('[href="/my-items"]').click()
    })

})