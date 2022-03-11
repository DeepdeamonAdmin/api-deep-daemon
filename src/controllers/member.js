
const { response } = require('express');
const mysqlConnection = require('../database');


//obtener todos los datos de todas los colaboradores
const viewAllMember = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM member', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

//obtener los colaboradores segun su tipo
const viewSelectMember = (req, res= response ) => {
    const { status } = req.params; //por url
    mysqlConnection.query('SELECT *FROM member WHERE status = ?', [status], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }

  //Insertar Career
const insertMember = (req, res = response ) => {
    const { id, name, lastname, password, token,
        linkedin, email, short_desc, long_desc,
         status, photo_filename, ss, idGrade, idSchool,
         idCareer, type, start, end } = req.body;
    
    console.log( id, name, lastname, password, token,
                    linkedin, email, short_desc, long_desc,
                    status, photo_filename, ss, idGrade, idSchool,
                    idCareer, type, start, end );

    const query = `
        CALL memberAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?, ?, ?);
    `;
    mysqlConnection.query(query,
                         [id, name, lastname, password, token,
                            linkedin, email, short_desc, long_desc,
                            status, photo_filename, ss, idGrade, idSchool,
                            idCareer, type, start, end ], 
                        (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Member Saved'});
      } else {
        console.log(err);
      }
    });
  
  }


  //Eliminar Project
  const deleteMember = (req, res=response) => {
    const { id } = req.body;
    mysqlConnection.query('DELETE FROM member WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Member Deleted'});
      } else {
        console.log(err);
      }
    });
  }


  



module.exports = {
    viewAllMember,
    viewSelectMember,
    insertMember,
    deleteMember
}