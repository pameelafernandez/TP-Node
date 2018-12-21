$('form button').click(function () {
    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    const telefono = $('#telefono').val();
    const email = $('#email').val();

    const validarNumero = /^\d+$/;
    const validarEmail = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    // validación de los números de teléfono
    if (validarNumero.test(telefono) === false) {
        alert('el teléfono tiene que ser sólo números');
        return;
    };
    // validación de que sea un email
    if (validarEmail.test(email) === false) {
        alert('no es un email');
        return;
    };
    // creamos el objeto del usuario
    let nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
    };
    
    $.ajax('http://localhost:3003/api/users', {
        method: 'POST',
        data: nuevoUsuario
    }).done(function () {
        alert('Usuario Creado');
    }).fail(function (err) {
        alert('salió todo mal')
    });
});