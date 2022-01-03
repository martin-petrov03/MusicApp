describe("Tests main functionalities", () => {
  it("loads songs", () => {
    cy.visit("/")
      .get("div.SongsList_songs__0AFHs div")
      .should(($songsArray) => {
        expect($songsArray.length).to.be.greaterThan(0);
      });
  });

  it("loads artists", () => {
    cy.visit("/artists")
      .get("div.ArtistsList_artists__87I62 div")
      .should(($artistsArray) => {
        expect($artistsArray.length).to.be.greaterThan(0);
      });
  });

  it("loads playlists", () => {
    cy.visit("/playlists")
      .get("div.Playlists_playlists___ikDt div")
      .should(($playlistsArray) => {
        expect($playlistsArray.length).to.be.greaterThan(0);
      });
  });

  it("loads songs in add playlist page", () => {
    cy.visit("/playlists/add")
      .get("#songs option")
      .should(($songsArray) => {
        expect($songsArray.length).to.be.greaterThan(0);
      });
  });
});
