const Sequelize = require('sequelize');
const equipo = require('../models').equipo;

module.exports = {

	create(req,res){
		return equipo.create({
			nombre: req.body.nombre,
			lider: req.body.lider
		})
		.then(equipo => res.status(200).send(equipo))
        .catch(error => res.status(400).send(error))
	},
	update(req,res){
		return equipo.update({
			nombre: req.body.nombre,
			lider: req.body.lider
		},{
			where:{id: req.body.id}
		})
		.then(equipo => res.status(200).send(equipo))
        .catch(error => res.status(400).send(error))
	},
	list(_, res) {
     return equipo.findAll({})
        .then(equipo => res.status(200).send(equipo))
        .catch(error => res.status(400).send(error))
	},

};