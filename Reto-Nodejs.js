// Se importa la librería express
const express = require('express');

//Se importa la librería Mongoose
const mongoose = require('mongoose');


//Se llama al constructor de express
const app = express();

//endPoints => Rutas 

app.use(express.json()); //indica que todas las rutas soportan formato json
app.use(express.urlencoded({ extended: true })); // codificación de URL activado
const router = express.Router();

//Se indica dónde están los endpoints de la aplicación
app.use('/Reto-Nodejs/api', require('./router/rutas'));


//Se configura la cadena de conexión a la BD que está en MongoDB
mongoose.connect('mongodb+srv://HenryJulian:Henryco060889@universidad.wsxxoep.mongodb.net/Universidad')
    .then(db => console.log('Conexión Exitosa'))
    .catch( err => console.log('Error al conectar con la Base de Datos: ', err))

//Se pone al servidor en modo escucha, se ejecuta el servidor
const puerto = 3000;
app.listen ( puerto, () => {
    console.log(`El servidor está Online en el puerto - y está funcionando con NODEMON ${puerto}`);
} );
