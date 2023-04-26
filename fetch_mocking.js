class FetchPokemon {

fetchPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const pokemon = {
                name: response.name,
                id: response.id
            };
            return pokemon;
        })
    }
}
module.exports = FetchPokemon;