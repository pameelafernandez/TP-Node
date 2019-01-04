// Me traigo express
const express = require('express');

// Le pido a express el Router
const router = express.Router();

// Contador para incrementar IDs
let contador = 3;

const users = [
    {
      id: 1,
      nombre: "Ada",
      apellido: "Lovelace",
      telefono: "1234567890",
      email: "contacto@gmail.com"
    },
    {
      id: 2,
      nombre: "Grace",
      apellido: "Hopper",
      telefono: "087654321",
      email: "contacto@hotmail.com"
    }
];

// Mis Rutas
router.get('/users', (req, res) => {
    // Busco el parámetro
    let search = req.query.search;
    // Filtro los usuarios
    if (search && search.length > 0){
        let usuarioFil = [];
        search = search.toLowerCase();

        for (let i = 0; i < users.length; i++){
            const nombre = users[i].nombre.toLowerCase();
            const apellido = users[i].apellido.toLowerCase();
            const telefono = users[i].telefono.toLowerCase();
            const email = users[i].email.toLowerCase()

            if (nombre.indexOf(search) >= 0) {
                usuarioFil.push(users[i]);
            }
            else if (apellido.indexOf(search) >= 0) {
                usuarioFil.push(users[i]);
            }
            else if (telefono.indexOf(search) >= 0) {
                usuarioFil.push(users[i]);
            }
            else if (email.indexOf(search) >= 0) {
                usuarioFil.push(users[i]);
            }
        };

        return res.json(usuarioFil)
    }
    res.json(users);
});

router.post('/users', function (req, res) { // Agrego usurarios al array
    // La información que me llega desde la web
    const newUser = req.body;

    if (newUser.nombre.length > 30){
        return res.status(400).end('exediste los 30 caracteres');
    };
    // Le  agrego un ID al objeto
    newUser.id = contador++;
    // Agrego el usuario al array global
    users.push(newUser);
    // Le respondemos al usuario con el array de objetos
    res.json(users);
});

router.put("/users/:id", (req, res) =>{
    //necesito que la url que ingrese vaya a buscar cada usuario
    //(mis objetos), los encuentre y modifique ese atributo
    //imago que tendré que hacer algo con req.body
    const idUser = parseInt(req.params.id)
    const miUser = users.find(u => u.id === idUser)
    miUser.nombre = req.body.nombre || miUser.nombre;
    miUser.apellido = req.body.apellido || miUser.apellido;
    miUser.email = req.body.email || miUser.email;
    miUser.telefono = req.body.telfono || miUser.telefono;
   
    res.json(miUser)
});

router.delete('/users/:id', (req, res) => { // Borra usuarios del array
    console.log('ID del usuario que recibo', req.params.id)
    //1) agarro el ID que recibí por parametros
    //req.params.id => lo que recibo en formato STRING
    //parseInt(req.params.id)
    const userId = parseInt(req.params.id);

    //2) Necesito saber en que posicion está el objeto que quiero traer
    //Usamos findIndex
    //array.findIndex(criterio de búsqueda)
    users.splice(users.findIndex(user => user.id === userId), 1);
    // Le respondemos al usuario con el array de objetos actualizado
    res.json(users);
});

router.get("/users/:id", (req, res) => { // Filtro usuarios por ID
    // Recupero el parámetro ID
    const userId = parseInt(req.params.id);
    // Con findIndex
    // const userIndex = users.findIndex(user => user.id === userId)
    // Devuelvo la posicion del array
    // res.json(users[userIndex])
  
    // Con Find
    const user = users.find(user => user.id === userId);
    // Le mandamos una respuesta al cliente
    res.json(user);
});

module.exports = router;