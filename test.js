const fetchPokemon = require("./fetch_mocking");

//Here, as opposed to our mocked test, we are testing with real data
//This means that we are testing beyong just the implementation of the 
//fetchPokemon function - we don't just check that it returns an object "pokemon"
//with a name and an id like we are in the mocked version of the function,
//but also that the data is consistent with what we expect to receive from the API
describe("api", () => {
  it("calls the API and formats the data into an object", () => {
    fetchPokemon().then((pokemon) => {
      expect(pokemon.name).toEqual("ditto");
      expect(pokemon.id).toEqual(132);
    });
  });
});
