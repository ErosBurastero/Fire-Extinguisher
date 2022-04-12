/// <reference types="cypress" />

describe("order", () => {
    beforeEach(() => {
        cy.visit("")
    })

    it("get products", () => {
        cy.get('.v-btn__content').click()
        expect("/products")
        cy.get('[href="/products/1"] > .images').should("be.visible").click()
    })


})