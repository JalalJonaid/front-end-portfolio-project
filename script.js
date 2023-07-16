document.querySelector("#search").addEventListener("click", getPokemon);
document.querySelector("#normalType").addEventListener("click", getPokemonNormal);
document.querySelector("#fightingType").addEventListener("click", getPokemonFighting);
document.querySelector("#flyingType").addEventListener("click", getPokemonFlying);
document.querySelector("#poisonType").addEventListener("click", getPokemonPoison);
document.querySelector("#groundType").addEventListener("click", getPokemonGround); //5
document.querySelector("#rockType").addEventListener("click", getPokemonRock); //6
document.querySelector("#bugType").addEventListener("click", getPokemonBug); //7
document.querySelector("#ghostType").addEventListener("click", getPokemonGhost); //8

function getPokemonNormal(e) {
const type = document.querySelector("#normalType").value;

  fetch(`https://pokeapi.co/api/v2/type/1`)
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
function getPokemonFighting(e) {
    const type = document.querySelector("#fightingType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/2`)
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
function getPokemonFlying(e) {
    const type = document.querySelector("#flyingType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/3`)
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
function getPokemonPoison(e) {
    const type = document.querySelector("#poisonType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/4`)
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
