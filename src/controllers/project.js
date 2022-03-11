
const { response } = require('express');
const mysqlConnection = require('../database');
const multer = require('multer');
const path = require('path');

// const diskstorage = multer.diskStorage({
//   destination: path.join(__dirname, '../images'),
//   filename: (req, front_img, cb) => {
//       cb(null, 'project' + Date.now() + front_img.originalname)
//   }
// })

// const fileUpload = multer({
//   storage: diskstorage
// }).single('frontImg')

//obtener todos los datos de todas los project
const viewAllProject = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM project', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

//obtener los Projectos segun su tipo
const viewSelectProject = (req, res= response ) => {
  const { status } = req.params; //por url
  mysqlConnection.query('SELECT *FROM project WHERE status = ?', [status], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}



  //Insertar Project
const insertProject = (req, res = response ) => {
    // console.log(req.front_img);
    const {id, name, descr, status, impact, front_img, modal_media, modal_type, link, idTech} = req.body;
    console.log(id, name, descr, status, impact, front_img, modal_media, modal_type, link, idTech);
    const query = `
        CALL ProjectAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, descr, status, impact, 
                                    front_img, modal_media, modal_type, link, idTech],
                                    (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Saved'});
      } else {
        console.log(err);
      }
    });
  
  }
  //Editar Project
  const updateProject = (req, res) => {
    const {id, name, descr, impact, front_img, modal_media, modal_type, link, idTech} = req.body;
    console.log(id, name, descr, impact, front_img, modal_media, modal_type, link, idTech);
    const query = `
        CALL ProjectAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
      mysqlConnection.query(query, [id, name, descr, impact, 
                                    front_img, modal_media, modal_type, link, idTech],
                                    (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Edit Saved'});
      } else {
        console.log(err);
      }
    });
  
  }

  //Eliminar Project
  const deleteProject = (req, res=response) => {
    const { id } = req.body;
    mysqlConnection.query('DELETE FROM project WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Deleted'});
      } else {
        console.log(err);
      }
    });
  }




  



module.exports = {
    viewAllProject,
    viewSelectProject,
    insertProject,
    updateProject,
    deleteProject
}