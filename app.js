const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/indexRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRoutes);
app.use('/api', apiRoutes);




module.exports = app;
