describe("Tests artists details", () => {
  it("check first four artists top songs section", () => {
    for (let i = 1; i <= 4; i++) {
      cy.visit(`/artists/${i}`)
        .get("ol li")
        .should(($topSongsArray) => {
          expect($topSongsArray.length).to.equal(5);
        });
    }
  });
});
