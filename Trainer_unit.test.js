const Trainer = require("./Trainer");

describe("Trainer class - unit tests", () => {
    it("returns a string with the pokemon name when sayPokemonName is called", () => {
        const doublePokemon = { getPokemonName: () => { return "Ivysaur" } };

        const ash = new Trainer("Ash", doublePokemon);
        let sentence = ash.sayPokemonName(); 
        expect(sentence).toEqual("My pokemon is Ivysaur");
    })
})