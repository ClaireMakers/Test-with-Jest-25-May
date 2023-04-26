const Trainer = require("./Trainer");
const Pokemon = require("./Pokemon");
const Battle = require("./Battle");


describe("Battle class - integration testing", () => {
    beforeEach(() => {
       
    });

    it("plays a round of the battle and returns the winner when playBattleRound is called", () => {
        const pikachu = new Pokemon("Pikachu", 25, 3);
        const ivysaur = new Pokemon("Ivysaur", 28, 2);

        const ash = new Trainer("Ash", pikachu);
        const misty = new Trainer("Misty", ivysaur);

         const battle = new Battle(ash, misty);

        let result = battle.playBattleRound();
        
        expect(result).toEqual({
          name: "Ivysaur",
          hitPoints: 25,
          attackDamage: 2,
        });
        expect(result).toBe(ivysaur);
    })
})