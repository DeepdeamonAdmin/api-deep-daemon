/*
    Rutas de school  /school

*/
const express = require('express');
const router = express.Router();
const {viewAllSchool, viewSchool, insertSchool, updateSchool, deleteSchool} = require('../controllers/school')

//Ver todos los datos 
router.get(
    '/',
    [
        //middlewares validcacion con express validaitor
    ],
     viewAllSchool );
//Ver datos por id
router.get('/:id', viewSchool );
//Insertar datos
router.post('/', insertSchool );
//Editar datos por id
router.put('/:id', updateSchool );
//Eliminar datos
router.delete('/:id', deleteSchool);

module.exports = router;