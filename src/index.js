// Crear BAckend API con mysql

// instalar dependencias
//npm i express
//npm i express@4.17.1
//mpn i mysql
//variables de entorno
//instalar npm i dotenv
//instalar cors npm i cors

//Configuracion basica de express
const express = require('express');
const cors = require('cors');
require('dotenv').config();


//Crear el servidor de express
const app = express(); //producto de express

//Settings
app.set('port', process.env.PORT || 4000)


//Middlewares 
app.use(cors());
//Lectura y parseo del body
app.use(express.json()); //permite entender json

//Routes
//Directorio publico
app.use( express.static('public') );

//ruta manejo de datos tabla school
app.use('/api/school', require('./routes/school'));
//ruta manejo de datos tabla career
app.use('/api/career', require ('./routes/career'));
//ruta manejo de datos tabla grade
app.use('/api/grade', require('./routes/grade'));
//ruta manejo de datos tabla member
app.use('/api/member', require('./routes/member'));
//ruta manejo de datos tabla project
app.use('/api/project', require('./routes/project'));
//ruta manejo de datos tabla tech
app.use('/api/tech', require('./routes/tech'));
//ruta manejo de datos tabla publication
app.use('/api/publication', require('./routes/publication'));





//Start the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port') );
});
