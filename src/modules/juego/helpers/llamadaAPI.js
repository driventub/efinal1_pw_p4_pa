async function consumirAPI(id) {
  const { name } = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (r) => r.json()
  );

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  console.log(url);
  return {

    nombre: name,
    img: url
  
  };
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function consumirAPIFachada() {
  const arreglo = [
    await consumirAPI(aleatorio(10, 15)),
    await consumirAPI(aleatorio(10, 15)),
    await consumirAPI(aleatorio(10, 15)),
    await consumirAPI(aleatorio(10, 15)),
    await consumirAPI(aleatorio(10, 15)),
    
  ];

  return arreglo;
}

export default consumirAPIFachada;
