const Trainer = require("../Trainer");

describe("Trainer Class - Unit tests", () => {
    it("returns a string with the pokemon name when sayPokemonName is called", () => {
        const doublePokemon = {
            getPokemonName: () => { return "pokemon1" }
        }

        const trainer = new Trainer("Ash", doublePokemon);
        expect(trainer.sayPokemonName()).toEqual("My pokemon is pokemon1");
    })
})