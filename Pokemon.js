class Pokemon {
  constructor(name, hitPoints, attackDamage) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
  }

  getPokemonName() {
    return this.name;
  }
}

module.exports = Pokemon;