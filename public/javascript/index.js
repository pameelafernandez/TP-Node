// Recupero los nodos con JQuery de mi HTML
const $tableUsers = $("#table-users");

// Le pido al servidor la data de los usuarios para armar la tabla
$.ajax('/api/users').done(function(data){
    armarTabla(data);
});

function armarTabla(users){ // Armo la tabla dinámicamente con la data de los usuarios
    for (let i = 0; i < users.length; i++) {
        $tableUsers.append(`
            <tr class='fila-usuario' data-id=${users[i].id}>
                <td>${users[i].nombre}</td>
                <td>${users[i].apellido}</td>
                <td>${users[i].telefono}</td>
                <td>${users[i].email}</td>
                <td><button class="btn edit">Editar <i class="fas fa-user-edit"></i></button></td>
                <td><button class="btn delete" >Borrar <i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `);
      }
};

$(document).on("click", ".btn.edit", function() {
    // Recupero el ID que tiene la row
    // Tengo que hacer .parent().parent() porque el button esta dentro de un span
    // Su primer parent es el button
    // Su segundo parent es la row
    const id = $(this)
      .parent()
      .parent()
      .data("id");
    location.href = `/users/edit?id=${id}`;
  });

$(document).on("click", ".btn.delete", function() {
    const id = $(this)
      .parent()
      .parent()
      .data("id");

    $.ajax(`/api/users/${id}`, { method: "delete" }).done(function (){
        $(this)
            .parent()
            .parent()
            .remove();
    }).fail(function (){
        alert('Algo no funcionó')
    });
});

$('#filtrar').click(function (){
    const $search = $('#filtrar-users').val();

    $.ajax('/api/users?search=' + $search)
    .done(function(data) {
        $('tr').remove();
        armarTabla(data);
    }).fail(function(){
        alert('Algo salió mal')
    });
});