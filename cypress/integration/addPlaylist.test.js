describe("Tests add playlist functionalities and validation", () => {
  it("try to add playlist with too short title", () => {
    cy.visit("/playlists/add")
      .get("input.AddPlaylist_inputField__6ERdM")
      .first()
      .type("A")
      .get("button.AddPlaylist_btn__hyVpG")
      .click()
      .get("div.AddPlaylist_message__1cFKQ")
      .should("have.text", "Title should be at least 2 characters long.");
  });

  it("try to add playlist with no imageUrl", () => {
    cy.visit("/playlists/add")
      .get("input.AddPlaylist_inputField__6ERdM")
      .first()
      .type("test")
      .get("button.AddPlaylist_btn__hyVpG")
      .click()
      .get("div.AddPlaylist_message__1cFKQ")
      .should("have.text", "Image url should be more than 6 characters.");
  });

  it("add playlist correctly", () => {
    cy.visit("/playlists/add")
      .get("input.AddPlaylist_inputField__6ERdM")
      .first()
      .type("test")
      .next()
      .next()
      .type("http://image.png")
      .get("button.AddPlaylist_btn__hyVpG")
      .click();
    cy.location("pathname").should("eq", "/playlists");
  });

  it("attach songs to playlist correctly", () => {
    cy.visit("/playlists/add")
      .get("select")
      .select("Nirvana - Smells Like Teen Spirit")
      .get("form p")
      .should("have.text", "Number of songs: 1");
  });
});
