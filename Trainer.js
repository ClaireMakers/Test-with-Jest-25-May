class Trainer {
  constructor(name, pokemon) {
    this.pokemon = pokemon;
    this.name = name;
  }

  sayPokemonName() {
    return `My pokemon is ${this.pokemon.getPokemonName()}`;
  }

  getPokemon() {
    return this.pokemon;
  }
}

module.exports = Trainer;


