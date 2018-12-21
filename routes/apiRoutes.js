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
router.get('/users', (req, res) => { // Le respondo al usuario con el array de objetos existente
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

//router.put('/users/:id', (req, res) => {
    //const user = user.find(t => t.id === parseInt(req.params));
    //user.nombre = req.body.nombre || user.nombre;
    //user.apellido = req.body.apellido || user.apellido;
    //user.email = req.body.email || user.email;
    //user.telefono = req.body.telefono || user.telefono;
    //res.json(users);
//});

router.delete('/users/:id', (req, res) =>{ //Borra usuarios del array
    console.log('id del usuario que recibo', req.params.id)
    //1) agarro el ID que recibí por parametros
    //req.params.id => lo que recibo en formato STRING
    //parseInt(req.params.id)
    const userId = parseInt(req.params.id);

    //2) Necesito saber en que posicion está el objeto que quiero traer
    //Usamos findIndex
    //array.findIndex(criterio de búsqueda)
    users.splice(users.findIndex(user => user.id == userId), 1);
    res.json(users);
});

router.get("/users/:id", (req, res) => { // Filtro usuarios por ID
    // 0) Recupero el parametro ID
    const userId = parseInt(req.params.id);
    // 1) findIndex
    // const userIndex = users.findIndex(user => user.id === userId)
    // 2) Devuelvo la posicion del array
    // res.json(users[userIndex])
  
    // 2) find (!!)
    const user = users.find(user => user.id === userId);
    res.json(user);
});

module.exports = router;