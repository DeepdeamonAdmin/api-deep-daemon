const mysql = require('mysql');

// const mysqlConnection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'KOALA@96',
//     database : 'deepdaem_web_admin'
// });


/*BD EN HOSTING*/
const mysqlConnection = mysql.createConnection({
    host : 'deepdaemon.org',
    user : 'deepdae1_admin',
    password : 'D33pD43monC1C2022',
    database : 'deepdae1_adminweb'
    
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
    }else{
        console.log('Conexion exitosa a la BD');
    }  
});

//Para ver los errores en las sentencia Query
mysqlConnection.on('error', function(err) {
    console.log(err.code);
  });

module.exports = mysqlConnection;

