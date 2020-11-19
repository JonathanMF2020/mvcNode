const path = require('path');
const express = require('express');
const usuarioController = require('../controllers/equipocontroller');
module.exports = (app) => {

   app.use('/static', express.static(__dirname + '/../view/resources'));
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));

   app.post('/api/equipo/create', usuarioController.create);
   app.post('/api/equipo/update', usuarioController.update);

   app.get('/api/equipo/list', usuarioController.list);
   app.get('/', function(req, res) {
  		res.sendFile(path.join(__dirname +'/../view/index.html'));

});

   //app.get('/api/usuario/find/username/:username', usuarioController.find);
};