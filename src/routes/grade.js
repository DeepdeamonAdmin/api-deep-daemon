const express = require('express');
const { viewAllGrade } = require('../controllers/grade');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllGrade )

module.exports = router;