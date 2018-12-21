$('form button').click(function () { // Se ejecuta esta función cuando hacemos click en el botón "Guardar"
    // Recupero los nodos con JQuery de mi HTML
    const $nombre = $('#nombre').val();
    const $apellido = $('#apellido').val();
    const $telefono = $('#telefono').val();
    const $email = $('#email').val();

    const validarNumero = /^\d+$/;
    const validarEmail = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
   
    if (validarNumero.test($telefono) === false) {  // Validación de los números de teléfono
        alert('El teléfono tiene que ser sólo números');
        return;
    };
    
    if (validarEmail.test($email) === false) { // Validación de que sea un email
        alert('N es un email');
        return;
    };
    
    let nuevoUsuario = { // Creamos el objeto del usuario
        nombre: $nombre,
        apellido: $apellido,
        telefono: $telefono,
        email: $email
    };
    
    $.ajax('http://localhost:3003/api/users', {
        method: 'POST',
        data: nuevoUsuario
    }).done(function () {
        alert('Usuario Creado');
        location.href = '/users';
    }).fail(function (err) {
        alert('Salió todo mal')
    });
});