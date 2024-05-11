document.addEventListener("DOMContentLoaded", function () {
  async function recargarGatos() {
    const URL =
      "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW";
    const res = await fetch(URL);
    const data = await res.json();
    console.log("los gatitos son: ", data);
  
    const gatito = document.getElementById("gatito");
    gatito.innerHTML = "";
  
    data.forEach((gato) => {
      gatito.insertAdjacentHTML(
        'beforeend',
        `<div id=${gato.id}>
        <img class="clase-gato" src="${ gato.url}" > </img>
        <p class="icon-favorito"> <i class="fa-sharp fa-solid fa-heart"></i> </p>
        </div>`
      );
    });
  }
  
  recargarGatos();
  const Masgatos = document.getElementById("button-mas-gatod");
  Masgatos.addEventListener("click", function () {
    recargarGatos();
  });

  
  const iconFavorito = document.querySelectorAll('.icon-favorito .fa-heart');

  // Itera sobre cada elemento .icon-favorito y añade un evento de clic a cada uno
  iconFavorito.forEach(pElemento => {
    pElemento.addEventListener('click', function() {
      console.log('entre al click');
      // Aquí puedes agregar el código que desees que se ejecute cuando se haga clic en un elemento .icon-favorito
    });
  });



});

