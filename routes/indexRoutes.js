const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/estaspensandolomismoqueyobananin', (req, res) => {
    res.send('Claro que si Bananón')
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