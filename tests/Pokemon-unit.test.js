const Pokemon = require("../Pokemon");


describe("Pokemon Class - Unit tests", () => {
    test("getPokemonName returns the pokemon name", () => {
        const charmander = new Pokemon("Charmander", 20, 3);

        const pokemonName = charmander.getPokemonName();
        expect(pokemonName).toEqual("Charmander");
    });
})