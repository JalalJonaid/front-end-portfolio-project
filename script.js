document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const type = document.querySelector("#pokemonType").value;

  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
        <div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png" alt="bird"/>
        </div>
        <div class="pokemonInfo">
        <h1></h1>
        <h2>Type: ${data.name}</h2>
        </div>
        `;
    })
    .catch((err) => {
      console.log("Pokemon Type not Found", err);
    });

  e.preventDefault();
}
