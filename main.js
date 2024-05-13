document.addEventListener("DOMContentLoaded", function () {

  
  recargarGatos();
  GatosFavoritos()

  const Masgatos = document.getElementById("button-mas-gatod");
  Masgatos.addEventListener("click", function () {
    recargarGatos();
  });

  
  const iconFavorito = document.querySelectorAll('.icon-favorito .fa-heart');

  iconFavorito.forEach(pElemento => {
    pElemento.addEventListener('click', function() {
      console.log('entre al click');

    });
  });

  //FUNCION PARA TRAER GATOS DE LA API
  async function recargarGatos() {
    const URL =
      "https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW";
    const res = await fetch(URL);
    const data = await res.json();
    console.log("los gatitos son: ", data);
  
    const gatito = document.getElementById("gatito");
    gatito.innerHTML = "";
  
    data.forEach((gato) => {
      gatito.insertAdjacentHTML(
        'beforeend',
        `<div >
        <img class="clase-gato" src="${ gato.url}" > </img>
        <p id=${gato.id} class="icon-favorito"> <i class="fa-sharp fa-solid fa-heart"></i> </p>
        </div>`
      );
    });
  }

  //FUNCION PARA TRAER GATOS FAVORITOS
  async function GatosFavoritos() {
    const URL =
      "https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW";
    const res = await fetch(URL);
    const data = await res.json();
    console.log("los gatitos favoritos son: ", data);
  
    const gatitos_favoritos = document.getElementById("gatitos_favoritos");
    gatitos_favoritos.innerHTML = "";
  
    data.forEach((gato) => {
      gatitos_favoritos.insertAdjacentHTML(
        'beforeend',
        `<div>
        <img class="clase-gato" src="${ gato.url}" > </img>
        <p id=${gato.id} class="icon-favorito"> <i class="fa-sharp fa-solid fa-heart"></i> </p>
        </div>`
      );
    });
  }


});

