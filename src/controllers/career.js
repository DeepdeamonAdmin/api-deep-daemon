
const { response } = require('express');
const mysqlConnection = require('../database');


//obtener todos los datos de todas las school
const viewAllCareer = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM career', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}


  //Insertar Career
const insertCareer = (req, res = response ) => {
    const {id, short_name, name} = req.body;
    console.log(id, short_name, name);
    const query = `
        CALL careerAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, short_name, name], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Career Saved'});
      } else {
        console.log(err);
      }
    });
  
  }



  



module.exports = {
    viewAllCareer,
    insertCareer
}