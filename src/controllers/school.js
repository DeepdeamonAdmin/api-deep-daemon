
const { response } = require('express');
const mysqlConnection = require('../database');

//obtener todos los datos de todas las school
const viewAllSchool = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM school', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

//obtener datos de una escuela

const viewSchool = (req, res = response ) => {
    const { id } = req.params; //por url
    mysqlConnection.query('SELECT * FROM school WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  }

  //Insertar school
const insertSchool = (req, res) => {
    const {id, short_name, name} = req.body;
    console.log(id, short_name, name);
    const query = `
        CALL schoolAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, short_name, name], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'School Saved'});
      } else {
        console.log(err);
      }
    });
  
  }

//actualizar school

const updateSchool = (req, res) => {
    const {short_name, name} = req.body;
    const { id } =req.params;
    console.log(id, short_name, name);
    const query = `
        CALL schoolAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, short_name, name], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'School Saved'});
      } else {
        console.log(err);
      }
    });
  
  }

  //Eliminar School
  const deleteSchool = (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM school WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'school Deleted'});
      } else {
        console.log(err);
      }
    });
  }




module.exports = {
    viewAllSchool,
    viewSchool,
    insertSchool,
    updateSchool,
    deleteSchool
}