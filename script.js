document.querySelector("#search").addEventListener("click", getPokemon);
document.querySelector("#normalType").addEventListener("click", getPokemonNormal); //1
document.querySelector("#fightingType").addEventListener("click", getPokemonFighting); //2
document.querySelector("#flyingType").addEventListener("click", getPokemonFlying); //3
document.querySelector("#poisonType").addEventListener("click", getPokemonPoison); //4
document.querySelector("#groundType").addEventListener("click", getPokemonGround); //5
document.querySelector("#rockType").addEventListener("click", getPokemonRock); //6
document.querySelector("#bugType").addEventListener("click", getPokemonBug); //7
document.querySelector("#ghostType").addEventListener("click", getPokemonGhost); //8
document.querySelector("#steelType").addEventListener("click", getPokemonSteel); //9
document.querySelector("#fireType").addEventListener("click", getPokemonFire); //10
document.querySelector("#waterType").addEventListener("click", getPokemonWater); //11
document.querySelector("#grassType").addEventListener("click", getPokemonGrass); //12
document.querySelector("#electricType").addEventListener("click", getPokemonElectric); //13
document.querySelector("#psychicType").addEventListener("click", getPokemonPsychic); //14
document.querySelector("#iceType").addEventListener("click", getPokemonIce); //15
document.querySelector("#dragonType").addEventListener("click", getPokemonDragon); //16
document.querySelector("#darkType").addEventListener("click", getPokemonDark); //17
document.querySelector("#fairyType").addEventListener("click", getPokemonFairy); //18

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
        
        if(pokemon.types.length>1){
        pokemonTypeSecondary = pokemon.types[1].type.name;
        }

        else{
            pokemonTypeSecondary = "None!"
        }

        document.querySelector(".pokemonBox").innerHTML = `
        <div>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
        </div>
        <br>
        <div class="pokemonInfo">
        <h1></h1>
        <p>Name: ${pokemon.name}</p>
        <p>Secondary Type: ${pokemonTypeSecondary}</p>
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
function getPokemonGround(e) {
    const type = document.querySelector("#groundType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/5`)
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
function getPokemonRock(e) {
    const type = document.querySelector("#rockType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/6`)
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
function getPokemonBug(e) {
    const type = document.querySelector("#bugType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/7`)
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
function getPokemonGhost(e) {
    const type = document.querySelector("#ghostType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/8`)
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
function getPokemonSteel(e) {
    const type = document.querySelector("#steelType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/9`)
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
function getPokemonFire(e) {
    const type = document.querySelector("#fireType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/10`)
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
function getPokemonWater(e) {
    const type = document.querySelector("#waterType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/11`)
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
function getPokemonGrass(e) {
    const type = document.querySelector("#grassType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/12`)
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
function getPokemonElectric(e) {
    const type = document.querySelector("#electricType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/13`)
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
function getPokemonPsychic(e) {
    const type = document.querySelector("#psychicType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/14`)
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
function getPokemonIce(e) {
    const type = document.querySelector("#iceType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/15`)
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
function getPokemonDragon(e) {
    const type = document.querySelector("#dragonType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/16`)
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
function getPokemonDark(e) {
    const type = document.querySelector("#darkType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/17`)
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
function getPokemonFairy(e) {
    const type = document.querySelector("#fairyType").value;
    
      fetch(`https://pokeapi.co/api/v2/type/18`)
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
