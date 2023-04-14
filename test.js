const fetchPokemon = require("./fetch_mocking");

describe("api", () => {
  it("calls the API and formats the data into an object", () => {
    fetchPokemon().then((pokemon) => {
      expect(pokemon.name).toEqual("ditto");
      expect(pokemon.id).toEqual(132);
    });
  });
});
