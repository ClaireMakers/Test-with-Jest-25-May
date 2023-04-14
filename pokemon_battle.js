const Trainer = require("./Trainer.js");
const Pokemon = require("./Pokemon.js");
const Battle = require("./Battle.js");

const ivysaur = new Pokemon("Ivysaur", 25, 5);
const pikachu = new Pokemon("Pikachu", 25, 3);

const misty = new Trainer("Misty");
const ash = new Trainer("Ash");

ash.catchPokemon(pikachu);
misty.catchPokemon(ivysaur);

console.log(ash.getPokemon());
console.log(misty.getPokemon());

const battle = new Battle(misty, ash);
battle.playBattleRound();

console.log(ivysaur);
console.log(pikachu);
// battle.playBattleRound();

