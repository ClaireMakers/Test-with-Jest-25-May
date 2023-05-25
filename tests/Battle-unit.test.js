const Battle = require("../Battle");
const Trainer = require("../Trainer")

jest.mock("./Trainer");

describe("Battle Class - unit tests", () => {
    beforeEach(() => {
        // Before each test, reset the mock
        // This helps starting each test case
        // with a "fresh" mocked class
        Trainer.mockClear();
    });
    
    test("playBattleRound returns the winning pokemon", () => {
        // 1. We use the normal constructor - Jest will take care of creating a mock.
        const mockedTrainer = new Trainer();
        const mockedTrainer2 = new Trainer();

        const doublePokemon = {
            name: "pokemon1",
            attackDamage: 2,
            hitPoints: 20
        }

        const doublePokemon2 = {
            name: "pokemon2",
            attackDamage: 4,
            hitPoints: 20,
        };

        // 2. We mock the method getMove, replacing its normal implementation
        // with a custom function (which here simply returns 'paper').
        mockedTrainer.getPokemon.mockImplementation(() => {
            return doublePokemon
        });

        mockedTrainer2.getPokemon.mockImplementation(() => {
            return doublePokemon2;
        });

        // 3. The rest is the same as when using the previous technique.
        const battle = new Battle(mockedTrainer, mockedTrainer2);

        expect(battle.playBattleRound()).toBe(doublePokemon2);
        expect(mockedTrainer.getPokemon).toHaveBeenCalledTimes(1);
        expect(mockedTrainer2.getPokemon).toHaveBeenCalledTimes(1);
    });
});


