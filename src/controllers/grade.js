
const { response } = require('express');
const mysqlConnection = require('../database');


//obtener todos los datos de todas las grade
const viewAllGrade = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM grade', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}


module.exports = {
    viewAllGrade,
}