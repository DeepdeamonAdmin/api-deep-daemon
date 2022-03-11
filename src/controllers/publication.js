
const { response } = require('express');
const mysqlConnection = require('../database');


//obtener todos los datos de todas las school
const viewAllPublication = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM publication', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}


  //Insertar Career
const insertPublication = (req, res = response ) => {
    const { id, postType, descr, frontImg, modalMedia, modalType, link, autor, title,
            journal, yearMonth, volume, numbert, pages,
            publisher, address, howpublished, booktitle, editor, 
            series, organization, school, note, institution, idTech } = req.body;

    console.log( id, postType, descr, frontImg, modalMedia, modalType, link, autor, title,
                journal, yearMonth, volume, numbert, pages,
                publisher, address, howpublished, booktitle, editor, 
                series, organization, school, note, institution, idTech);
    const query = `
        CALL publicationAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [ id, postType, descr, frontImg, modalMedia, 
                                    modalType, link, autor, title, journal, 
                                    yearMonth, volume, numbert, pages, publisher, 
                                    address, howpublished, booktitle, editor,
                                    series, organization, school, note, institution, idTech
                                ], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Publication Saved'});
      } else {
        console.log(err);
      }
    });
  
  }



  


module.exports = {
    viewAllPublication,
    insertPublication
}