const url = "https://pokeapi.co/api/v2/pokemon/ditto"; //Api de pokemon ditto

//Usemos fetch para extraer la información de la api con promesas
fetch(url)
  .then((response) => response.json()) //Respuesta del servidor, convertimos a JSON
  .then((data) => {
    //Imprimimos en consola(data) y mostramos en el html
    let elemento = document.getElementById("ditto");
    elemento.innerHTML = `Nombre: ${data.name}`;
    document.getElementById("orden").innerHTML = `Orden: ${data.order}`; //obtenemos del elemento con "x" id y asignamos su contenido

    for (let i = 0; i < data.abilities.length; i++) {
      document.getElementById(
        "habilidad"
      ).innerHTML += `${data.abilities[i].ability.name}<br>`;
    }
    document.getElementById("imagenes").innerHTML = `
        <img src='${data.sprites.front_default}'/>
        <img src='${data.sprites.front_shiny}'/>
        <img src='${data.sprites.back_default}'/>
         `;
    console.log(data.abilities);
  })
  .catch((err) => console.log(err)); //Manejo de errores


