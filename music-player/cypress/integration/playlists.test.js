describe("Tests playlist functionalities", () => {
  it("check if there are songs in the first playlist", () => {
    cy.visit("/playlists/1")
      .get("ol > div")
      .should(($songsArray) => {
        expect($songsArray.length).to.be.greaterThan(0);
      });
  });

  it("check if playing button work properly", () => {
    cy.visit("/playlists/1")
      .get("button")
      .first()
      .click()
      .get("button")
      .should(($buttonsArray) => {
        expect($buttonsArray.length).to.equal(3);
      });
  });

  it("check class of the playing song", () => {
    cy.visit("/playlists/1")
      .get("button")
      .first()
      .click()
      .get("ol > div")
      .first()
      .should("have.class", "PlaylistDetails_playing__fjKBs");
  });

  it("check if button controls work properly", () => {
    cy.visit("/playlists/1")
      .get("button")
      .first()
      .click()
      .get("button")
      .eq(2)
      .click()
      .get("ol > div")
      .eq(1)
      .should("have.class", "PlaylistDetails_playing__fjKBs");
  });

  //this test won't always pass due to the rondom playing
  it("test shuffle playing", () => {
    cy.visit("/playlists/1")
      .get("ol > div")
      .first()
      .then(($firstSong) => {
        const firstSongText = $firstSong.text();
        cy.get("button")
          .eq(1)
          .click()
          .get("ol > div")
          .first()
          .should(($currentFirstSong) => {
            expect($currentFirstSong.text()).to.not.equal(firstSongText);
          });
      });
  });
});
