const express = require('express');
const { insertCorreos, viewAllCorreos } = require('../controllers/correos');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllCorreos);
//Insertar datos
router.post('/', insertCorreos);

module.exports = router;