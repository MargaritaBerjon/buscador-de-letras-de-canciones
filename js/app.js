import * as UI from './interfaz.js';
import { API } from './api.js'

UI.formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault()

  const artista = document.querySelector('#artista').value,
    cancion = document.querySelector('#cancion').value;

  if (artista === '' || cancion === '') {
    UI.divMensajes.innerHTML = 'Todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');
    setTimeout(() => {
      UI.divMensajes.innerHTML = '';
      UI.divMensajes.classList.remove('error');
    }, 3000);
  } else {
    const api = new API(artista, cancion);

    api.consultarAPI()
      .then(data => {
        console.log(data);

      })
  }


});


