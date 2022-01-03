describe("Tests navigation functionalities", () => {
  it("loads correctly", () => {
    cy.visit("/")
      .get(".Navigation_links__2yCHS > div")
      .should(($songsArray) => {
        expect($songsArray.length).to.equal(3);
      });
  });

  it("redirect to home page", () => {
    cy.visit("/").get(".Navigation_links__2yCHS > div").first().click();
    cy.location("pathname").should("eq", "/");
  });

  it("redirect to artists page", () => {
    cy.visit("/").get(".Navigation_links__2yCHS > div").eq(1).click();
    cy.location("pathname").should("eq", "/artists");
  });

  it("redirect to playlists page", () => {
    cy.visit("/").get(".Navigation_links__2yCHS > div").eq(2).click();
    cy.location("pathname").should("eq", "/playlists");
  });
});
