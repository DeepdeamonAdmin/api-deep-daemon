const express = require('express');
const { viewAllProject, insertProject, deleteProject,
         updateProject, viewSelectProject } = require('../controllers/project');
const router = express.Router();

//ver todos los datos
router.get('/', viewAllProject );
//ver datos segun status
router.get('/:status', viewSelectProject );
//Insertar datos
router.post('/', insertProject );
//Editar datos
router.put('/', updateProject);
//Eliminar datos
router.delete('/', deleteProject );

module.exports = router;