//Se importa mongoose
const mongoose = require('mongoose');

let UniSchema = new mongoose.Schema({
    idIcfes: Number,
    tipoDoc: String,
    docIdent: Number,
    nombres: String,
    apellidos: String,
    dirección: String,
    email: String,
    teléfono: Number,
    celular: Number,
    linkconsg: String,
    codIcfes: Number,
    familiar: Boolean,
    estrato: Number,
    colegiogrado: String,
});

module.exports = mongoose.model('icfes', UniSchema, 'Pruebas');
