class Trainer {
  constructor(name) {
    this.pokemon = {};
    this.name = name;
  }

  catchPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  getPokemon() {
    return this.pokemon;
  }
}

module.exports = Trainer;