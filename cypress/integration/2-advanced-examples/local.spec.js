/// <reference types = "cypress" />

describe("local", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })

    it('runing localhost', () => {
        expect('baseUrl')
    })

})