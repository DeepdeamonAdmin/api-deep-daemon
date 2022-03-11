const express = require('express');
const { viewAllPublication, insertPublication } = require('../controllers/publication');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllPublication )
//Insertar datos
router.post('/', insertPublication );

module.exports = router;