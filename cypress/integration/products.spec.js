/// <reference types="cypress" />

describe("products", () => {
    beforeEach(() => {
        cy.visit("/products")
    })

    it("set product directly from /products", () => {
        cy.get('[href="/products/9"] > .images').should("be.visible").click()
        expect("products/9")
        cy.get('.box')
        expect("RENT MODAL")
        cy.get('.v-btn').should("be.visible").click()
        cy.get('.mt-6 > .v-btn__content').click()
        expect("products/9")
        cy.get('.box > .text-center > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(1) > :nth-child(6) > .v-btn > .v-btn__content').click()
        cy.get(':nth-child(3) > :nth-child(4) > .v-btn > .v-btn__content').click()
        cy.get('.text-center > :nth-child(2) > .my-10').click()
        cy.get('[href="/my-items"]').click()
        expect("/my-items")




    })
})