import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault()

  const artista = document.querySelector('#artista').value,
    cancion = document.querySelector('#cancion').value;

  if (artista === '' || cancion === '') {
    UI.divMensajes.innerHTML = 'Todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');
  }


});


