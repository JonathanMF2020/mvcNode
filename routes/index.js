const usuarioController = require('../controllers/equipocontroller');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/equipo/create/nombre/:nombre/encargado/:encargado', usuarioController.create);
   app.post('/api/equipo/create/nombre/:nombre/encargado/:encargado/id/:id', usuarioController.update);
   app.get('/api/equipo/list', usuarioController.list);

   //app.get('/api/usuario/find/username/:username', usuarioController.find);
};