// Recupero el parámetro ID de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Recupero los nodos con JQuery de mi HTML
const $nombre = $('input[name="nombre"]');
const $apellido = $('input[name="apellido"]');
const $telefono = $('input[name="telefono"]');
const $email = $('input[name="email"]');

// Le pido al servidor la información del usuario con ese ID
$.ajax(`/api/users/${id}`).done(function(user){
    $nombre.val(user.nombre);
    $apellido.val(user.apellido);
    $telefono.val(user.telefono);
    $email.val(user.email);
});

//$('form button').click(function () {
  //  $.ajax(``)
//});
