const express = require('express');
const { viewAllTech, insertTech } = require('../controllers/tech');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllTech )
//Insertar datos
router.post('/', insertTech );

module.exports = router;