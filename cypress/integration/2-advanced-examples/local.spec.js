/// <reference types = "cypress" />

describe("local", () => {
    beforeEach(() => {
        cy.visit("");
    });

    it("get title", () => {
        cy.GetByDataCy("title");
        expect("FIND YOUR FIRE EXTINGUISHER");
    });

    it("get description", () => {
        cy.GetByDataCy("description");
        expect(
            " Lorem ipsum dolor sit amet consectetur um laboriosam  , perspiciatis deserunt asphendeum atque voluptatem   omnis molestias cumque adipisci.");
    });

    it("get images", () => {
        cy.get("img")
    })

});