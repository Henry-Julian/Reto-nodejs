const express = require('express');
const router = express.Router();
const IcfesSchema = require('../modelos/Icfes.js');

router.get('/', function(req, res){
    res.send('Hola desde Express');
});

router.post('/icfes', (req, res) => {
    let nuevaIcfes = new IcfesSchema({

        idIcfes: req.body.id,
        tipoDoc: req.body.tipodoc,
        docIdent: req.body.documento,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono,
        celular: req.body.celular,
        linkconsg: req.body.link,
        codIcfes: req.body.codicfes,
        familiar: req.body.familiar,
        estrato: req.body.estrato,
        colegiogrado: req.body.colegio, 

    });
    //le decimos a mongo que nos cambie la informacion enviada
    nuevaIcfes.save( function( err, datos ){
        if ( err ){
            console.log(err);
        }
        res.send('Registro almacenado correctamente');
    });
    
});

//listar
router.get('/icfeslistar', (req, res) => {
    IcfesSchema.find((err, datos) => {
        if ( err )
        console.log('Error al leer el dato', err);
        res.send(datos);
    })
});

//actualizar
router.post('/icfes-actualizar', (req, res) => {
    let body = req.body;
    IcfesSchema.updateOne({'idIcfes': body.id}, {
        $set: {
            tipoDoc: body.tipodoc,
            docIdent: body.documento,
            nombres: body.nombre,
            apellidos: body.apellido,
            direccion: body.direccion,
            email: body.email,
            telefono: body.telefono,
            celular: body.celular,
            linkconsg: body.link,
            codIcfes: body.codicfes,
            familiar: body.familiar,
            estrato: body.estrato,
            colegiogrado: body.colegio, 
        }
    },
    function(error, info){
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo modificar el dato',
                err
            });
        } else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
});

//actualizar con PUT
router.put('/icfes-actualizar', (req, res) => {
    let body = req.body;
    IcfesSchema.updateOne({'idIcfes': body.id}, {
        $set: req.body
    },
    function(error, info) {
        if (error) {
            res.json ({
                resultado: false,
                msg: 'No se pudo modificar el dato',
                err
            });
        } else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
});

//eliminar
router.post("/tarea-eliminar/:id", (req, res)=> {
    let params = req.params;
    IcfesSchema.deleteOne({ 'idIcfes': params.id}, {
        $set: req.body
    },
    function(error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo eliminar el Dato',
                err
            });
        } else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
});

module.exports = router;
