/// <reference types = "cypress" />

describe("local", () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('get title', () => {
        cy.GetByDataCy('title')
        expect('FIND YOUR FIRE EXTINGUISHER')
    })

})