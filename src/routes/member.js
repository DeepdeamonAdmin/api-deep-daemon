const express = require('express');
const { viewAllMember, viewSelectMember, insertMember, deleteMember } = require('../controllers/member');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllMember );
//ver datos segun el tipo
router.get('/:status', viewSelectMember );
//Insertar datos
router.post('/', insertMember );
//Eliminar datos
router.delete('/',deleteMember);

module.exports = router;