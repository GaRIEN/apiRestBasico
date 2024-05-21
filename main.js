document.addEventListener("DOMContentLoaded", function () {

  
  recargarGatos();
  GatosFavoritos();


  // const Masgatos = document.getElementById("button-mas-gatos");
  // Masgatos.addEventListener("click", function () {
  //   recargarGatos();
  // });

  

  //FUNCION PARA TRAER GATOS DE LA API
  async function recargarGatos() {
    const URL =
      "https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW";
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
          <p class="icon-favorito"> <i id="${gato.id}" class="fa-sharp fa-solid fa-heart"></i> </p>
        </div>`
      );
    });
    

    // ESCUCHAR BOTON CLICK PARA AÑADIR A GATOS FAVORITOS
    const selectgatofavorito = document.querySelectorAll('.fa-heart');
    selectgatofavorito.forEach(gatito => {
      gatito.addEventListener('click', (event) => {
        const idcon = event.target.id;
        console.log(idcon)
        saveMichisFavourites(idcon)
      });
    });

    
  }

  //FUNCION PARA TRAER GATOS FAVORITOS
  async function GatosFavoritos() {
    const URL =
      "https://api.thecatapi.com/v1/favourites?&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW";
    const res = await fetch(URL);
    const data = await res.json();
    console.log("los gatitos favoritos son: ", data);
  
    const gatitos_favoritos = document.getElementById("gatitos_favoritos");
    gatitos_favoritos.innerHTML = "";
  
    data.forEach((gato) => {
      gatitos_favoritos.insertAdjacentHTML(
        'beforeend',
        `<div>
        <img class="clase-gato" src="${ gato.image.url}" > </img>
        <p  class="icon-favorito"> <i  class="fa-solid fa-heart-crack" id="${gato.id}" ></i> </p>
        </div>`
      );
    });

        // ESCUCHAR BOTON CLICK PARA eliminar A GATOS FAVORITOS
        const selectgatofavorito = document.querySelectorAll('.fa-heart-crack');
        selectgatofavorito.forEach(gatito => {
          gatito.addEventListener('click', (event) => {
            const idcon = event.target.id;
            console.log(idcon)
            console.log('hizo click en ', idcon)
            deleteFavoriteMichis(idcon)
          });
        });
    

  }

//FUNCION PARA SUBIR LOS GATOS FAVORITOS
async function saveMichisFavourites(id){
  const result = await fetch("https://api.thecatapi.com/v1/favourites?&api_key=live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW"  ,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id:id
    })
  })

  const data = await result.json();
  console.log('save')
  console.log(data)
  if(result.status !==200){
    console.log('hubo error', result.status )
  }

 }

 async function deleteFavoriteMichis(id) {
  try {
    const result = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': 'live_onj9ZIxmbQgIReBzzxPqF6sncPCvSYRf1KEqc68m1xeGN6pp3Od5jCzpVlFNK7aW', // Solo el valor de la clave, sin el nombre del parámetro
        'Content-Type': 'application/json'
      }
    });

    if (!result.ok) {
      throw new Error(`Error: ${result.status} ${result.statusText}`);
    }

    const data = await result.json();
    console.log('Deleted favourite:', data);
  } catch (error) {
    console.error('Error deleting favourite:', error);
  }

  GatosFavoritos();
}
});

