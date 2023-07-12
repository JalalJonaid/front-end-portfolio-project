console.log("Test");

function getPokemon() {
    fetch('https://pokeapi.co/api/v2/type/3').then((response) => response.json()).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log('Pokemon Type not Found', err);
    })
}

getPokemon();