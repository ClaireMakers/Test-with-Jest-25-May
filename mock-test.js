const Trainer = require("./Trainer.js");
const Battle = require("./Battle.js");
const fetchPokemon = require("./fetch_mocking.js");
require("jest-fetch-mock").enableMocks();

jest.mock("./Trainer");

describe("Battle", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    Trainer.mockClear();
  });

  it("plays a round of the battle when the function playBattleRound is called", () => {
    // 1. We use the normal constructor - Jest will take care of creating a mock.
    const mockTrainer = new Trainer();
    const mockTrainer2 = new Trainer();

    // 2. We mock the method getPokemon, replacing its normal implementation
    // with a custom function (which here simply returns a pokemon object).
      mockTrainer.getPokemon.mockImplementation(() => { return { name: "pokemon1", hitPoints: 20, attackDamage: 3 } })
      mockTrainer2.getPokemon.mockImplementation(() => {
        return { name: "pokemon2", hitPoints: 25, attackDamage: 1 };
      });

    // 3. The rest is the same as when using the previous technique.
      const battle = new Battle(mockTrainer, mockTrainer2);
      const results = battle.playBattleRound();
    
      expect(results).toEqual({ name: "pokemon2", hitPoints: 22, attackDamage: 1 })
      ;
  });
});

describe(("Mock fetch request"), () => {
    it('calls fetch and execute the associated functionalities', (done) => { 
    
    // 1. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
        name: "Pokemon1",
        id: 1
    }));

    // 2. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
        fetchPokemon().then((pokemon) => {
            expect(pokemon.name).toEqual("Pokemon1");
            expect(pokemon.id).toEqual(1);
            
    })
        
      // 3. Tell Jest our test can now end.
      done();
    })
})