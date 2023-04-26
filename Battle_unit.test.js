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

        console.log(result);
        expect(result).toEqual({
          name: "pokemon1",
          hitPoints: 24,
          attackDamage: 3,
        });
    })

});



//   it("wins the game", () => {
//     // 1. We use the normal constructor - Jest will take care of creating a mock.
//     const mockRandomGenerator = new RandomGenerator();

//     // 2. We mock the method getMove, replacing its normal implementation
//     // with a custom function (which here simply returns 'paper').
//     mockRandomGenerator.getMove.mockImplementation(() => "paper");

//     // 3. The rest is the same as when using the previous technique.
//     const game = new RockPaperScissors(mockRandomGenerator);

//     expect(game.getResult("scissors")).toBe("win");
//   });
// });