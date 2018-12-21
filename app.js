// Primero me traigo express
const express = require('express');

// Me traigo el bodyparser
const bodyParser = require('body-parser');

// Me traigo las rutas que necesito escuchar
const indexRoutes = require('./routes/indexRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

// Me traigo el módulo path
const path = require('path');

// Defino mi aplicación con express
const app = express();

// Le digo a mi servidor que use bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

// Le digo a mi servidor que cuando el cliente haga una petición vaya a buscar la ruta correspondiente
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

module.exports = app;
