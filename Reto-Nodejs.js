// importamos la libreria de express
const express = require('express');

//importar la libreria de Mongoose
const mongoose = require('mongoose');



//llamamos al constructor de express
const app = express();

//endPoints => Rutas 

app.use(express.json()); //indica que las rutas soportan formato json
app.use(express.urlencoded({ extended: true })); // codificación de URL activado
const router = express.Router();

//Indicar donde estan los endopoints de la aplicación
app.use('/Reto-Nodejs/api', require('./router/rutas'));


//configuramos la cadena de conexión a la BD que esta en MongoDB
mongoose.connect('mongodb+srv://Root:Admin123@cluster-ejemplogr27.5zutnur.mongodb.net/Ejemplo27')
    .then(db => console.log('Conexión Exitosa'))
    .catch( err => console.log('Error al conectar con la BDs: ', err))

//poner en modo escucha el servidor
const puerto = 3000;
app.listen ( puerto, () => {
    console.log(`El servidor esta online en el puerto - y esta funcionando con NODEMON ${puerto}`);
} );