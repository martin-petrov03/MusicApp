describe("Tests search functionalities", () => {
  it("should redirect to correct pathname", () => {
    cy.visit("/")
      .get("input")
      .eq(1)
      .type("a")
      .get("form div")
      .eq(0)
      .first()
      .click();
    cy.location("pathname").should("eq", "/search");
  });

  it("should redirect to correct search", () => {
    cy.visit("/")
      .get("input")
      .eq(1)
      .type("a")
      .get("form div")
      .eq(0)
      .first()
      .click();
    cy.location("search").should("eq", "?input=a");
  });

  it("should return any results", () => {
    cy.visit("/search?input=a")
      .get(".FoundItems_items__I6fIA > div")
      .should(($resultsArray) => {
        expect($resultsArray.length).to.be.greaterThan(3);
      });
  });
});
