
const { response } = require('express');
const mysqlConnection = require('../database');


//obtener todos los datos de todas las school
const viewAllTech = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM tech', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}


  //Insertar Career
const insertTech = (req, res = response ) => {
    const {id, name, descr, icon } = req.body;
    console.log(id, name, descr, icon);
    const query = `
        CALL techAddOrEdit(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, descr, icon], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tech Saved'});
      } else {
        console.log(err);
      }
    });
  
  }



  



module.exports = {
    viewAllTech,
    insertTech
}