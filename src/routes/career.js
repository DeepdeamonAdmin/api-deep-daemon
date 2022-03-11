const express = require('express');
const { insertCareer, viewAllCareer } = require('../controllers/career');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllCareer )
//Insertar datos
router.post('/', insertCareer );

module.exports = router;