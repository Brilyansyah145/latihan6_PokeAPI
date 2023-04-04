document.querySelector("#pokeball").addEventListener("click", getPokemon);

function getPokemon() {

    fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then((response) => response.json())
    .then((data) => {
        document.querySelector("#card").innerHTML = `
        <div id="card">
        <h3>${data.id}: ${data.name}</h3>
        <img src="${data.sprites.front_default}" alt="Pikachu">
        <p>Type: ${data.types[0].type.name}</p>
        </div>
        `
    })
    .catch((err) => {
        console.log("Pokemon not found", err);
    })
}

   