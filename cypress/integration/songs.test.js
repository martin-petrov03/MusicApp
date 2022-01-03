describe("Tests song details functionalities", () => {
  it("clicking to the previous song from the first one", () => {
    cy.visit("/songs/1").get("button").first().click();
    cy.location("pathname").should("eq", "/songs/1");
  });

  it("play next song", () => {
    cy.visit("/songs/1").get("button").eq(2).click();
    cy.location("pathname").should("eq", "/songs/2");
  });
});
