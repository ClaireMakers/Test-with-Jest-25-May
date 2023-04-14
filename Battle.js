class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  playBattleRound() {
    let pokemonTrainer1 = this.trainer1.getPokemon();
    let pokemonTrainer2 = this.trainer2.getPokemon();

    pokemonTrainer1.hitPoints =
      pokemonTrainer1.hitPoints - pokemonTrainer2.attackDamage;
    pokemonTrainer2.hitPoints =
      pokemonTrainer2.hitPoints - pokemonTrainer1.attackDamage;
    
    let battleStatus = `After the battle round, ${pokemonTrainer1.name} has ${pokemonTrainer1.hitPoints} hitpoints, 
    and ${pokemonTrainer2.name} has ${pokemonTrainer2.hitPoints}`; 
    
    console.log(battleStatus);

    if (pokemonTrainer1.hitPoints > pokemonTrainer2.hitPoints)
      return pokemonTrainer1;
    else
      return pokemonTrainer2;
  }
}

module.exports = Battle;