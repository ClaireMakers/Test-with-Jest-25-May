const Battle = require('./Battle');
const Trainer = require('./Trainer');

jest.mock("./Trainer.js");

describe("Battle Class - unit test", () => {
     beforeEach(() => {
       // Before each test, reset the mock
       // This helps starting each test case
       // with a "fresh" mocked class
       Trainer.mockClear();
     });
    
    it("returns the winner of a round when the playBattleRound function is called", () => {
        const mockTrainer = new Trainer("Ash");
        const mockTrainer2 = new Trainer("Misty");

        mockTrainer.getPokemon.mockImplementation(() => {
            return {
                name: "pokemon1",
                hitPoints: 25,
                attackDamage: 3
            }
        });

        mockTrainer2.getPokemon.mockImplementation(() => {
            return {
                name: "pokemon2",
                hitPoints: 25,
                attackDamage: 1
            }
        });

        console.log(mockTrainer.getPokemon());
        console.log(mockTrainer2.getPokemon());

        const battle = new Battle(mockTrainer, mockTrainer2);
        const result = battle.playBattleRound();

        expect(result).toEqual({
          name: "pokemon1",
          hitPoints: 24,
          attackDamage: 3,
        });
    })

});