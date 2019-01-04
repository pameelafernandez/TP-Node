// Primero me traigo express
const express = require('express');

// Le pido a express el Router 
const router = express.Router();

// Me traigo el módulo path
const path = require('path');


// Mis Rutas
router.get('/estaspensandolomismoqueyobananin', (req, res) => {
    res.send('Claro que si Bananón');
});

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname,"..","","users.html"));
});

router.get("/users/new", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get('/users/test', (req, res) => {
    res.sendFile(path.join(__dirname,"..","","test.html"));
});

router.get("/users/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "", "edit.html"));
});


module.exports = router;