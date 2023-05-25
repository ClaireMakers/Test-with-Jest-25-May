const Battle = require("../Battle");
const Trainer = require("../Trainer");
const Pokemon = require("../Pokemon");

describe("Pokemon Battle - integration testing", () => {
    test("playBattleRound plays a battle round and returns the winning pokemon", () => {
        const charmander = new Pokemon("charmander", 20, 3);
        const pikachu = new Pokemon("pikachu", 20, 2);

        const ash = new Trainer("Ash", pikachu);
        const gary = new Trainer("Gary", charmander);

        const battle = new Battle(ash, gary);

        expect(battle.playBattleRound()).toBe(charmander)
    });
})