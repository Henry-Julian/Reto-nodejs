//importar mongoose
const mongoose = require('mongoose');

let IcfesSchema = new mongoose.Schema({
    idIcfes: Number,
    tipoDoc: String,
    docIdent: Number,
    nombres: String,
    apellidos: String,
    direccion: String,
    email: String,
    telefono: Number,
    celular: Number,
    linkconsg: String,
    codIcfes: Number,
    familiar: Boolean,
    estrato: Number,
    colegiogrado: String,
});

module.exports = mongoose.model('icfes', IcfesSchema, 'Pruebas');