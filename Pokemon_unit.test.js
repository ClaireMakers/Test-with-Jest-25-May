const Pokemon = require("./Pokemon");


describe("Pokemon Class", () => {
    it("returns the Pokemon name when getPokemonName is called", () => {
        const pikachu = new Pokemon("Pikachu", 25, 3);
        expect(pikachu.getPokemonName()).toEqual("Pikachu");
    })
})