document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const type = document.querySelector("#pokemonType").value;

  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    
    let randomPokemonIndex = Math.floor(Math.random()*data.pokemon.length)
    let randomPokemon = data.pokemon[randomPokemonIndex].pokemon.url;
    
    console.log(randomPokemonIndex);
    console.log(randomPokemon);

    fetch(randomPokemon).then((response) => response.json()).then((pokemon) => {
        
        console.log(pokemon);

        document.querySelector(".pokemonBox").innerHTML = `
        <div>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
        </div>
        <div class="pokemonInfo">
        <h1></h1>
        <h2>New Pokemon: ${pokemon.name}</h2>
        </div>
        `;
        })  
    })
    .catch((err) => {
      console.log("Pokemon Type not Found", err);
    });

  e.preventDefault();
}
