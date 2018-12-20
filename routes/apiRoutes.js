const express = require('express');
const router = express.Router();
//const path = require('path');

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

router.get('/users', (req, res) => {
    res.json(users);
});

router.put('/users/:id', (req, res) => {
    const user = user.find(t => t.id === parseInt(req.params));
    user.nombre = req.body.nombre || user.nombre;
    user.apellido = req.body.apellido || user.apellido;
    user.email = req.body.email || user.email;
    user.telefono = req.body.telefono || user.telefono;
    res.json(users);
});

router.delete('/users/:id', (req, res) =>{
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

router.get("/users/:id", (req, res) => {
    // 0) Recupero el parametro id
    const userId = parseInt(req.params.id);
    // 1) findIndex
    // const userIndex = users.findIndex(user => user.id === userId)
    // 2) Devuelvo la posicion del array
    // res.json(users[userIndex])
  
    // 2) find (!!)
    const user = users.find(user => user.id === userId);
    res.json(user);
});

//router.get("/users/new", (req, res) => {
//});


module.exports = router;