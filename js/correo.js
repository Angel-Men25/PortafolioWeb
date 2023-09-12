const btnEnviar = document.querySelector('#enviar-correo');
const formulario = document.querySelector('#contact__form');

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  const affair = document.querySelector('#affair').value;
  const name = document.querySelector('#name').value;
  const message = document.querySelector('#message').value;

  window.location.href = `mailto:angel.valdez.2255@gmail.com?subject=Enviado desde portafolio web&body=Nombre%3A%20${name}%0ACorreo%3A%20${affair}%0AMensaje%3A%20${message}`;
})