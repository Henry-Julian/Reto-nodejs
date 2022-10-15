const express = require('express');
const router = express.Router();
const UniSchema = require('../Modelos/Uni.js');

router.get('/', function(req, res){
    res.send('Hola desde Express');
});

router.post('/uni', (req, res) => {
    let nuevoUni = new UniSchema({

        idIcfes: req.body.id,
        tipoDoc: req.body.tipodoc,
        docIdent: req.body.documento,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        dirección: req.body.dirección,
        email: req.body.email,
        teléfono: req.body.teléfono,
        celular: req.body.celular,
        linkconsg: req.body.link,
        codIcfes: req.body.codicfes,
        familiar: req.body.familiar,
        estrato: req.body.estrato,
        colegiogrado: req.body.colegio, 

    });
    
    //Se le dice a mongo que nos cambie la información enviada
        nuevoUni.save( function( err, Registroadmisiones ){
        if ( err ){
            console.log(err);
        }
        res.send('El registro quedó almacenado correctamente');
    });
    
});

     //Proceso para listar
     router.get('/unilistar', (req, res) => {
     UniSchema.find((err, Registroadmisiones) => {
        if ( err )
        console.log('Error al leer los datos', err);
        res.send(Registroadmisiones);
    })
});

     //Proceso para actualizar
     router.put('/uni-actualizar/:id', (req, res) => {
     let body = req.body;
     UniSchema.updateOne({'idIcfes': body.id}, {
        $set: {
            tipoDoc: req.body.tipodoc,
            docIdent: req.body.documento,
            nombres: req.body.nombre,
            apellidos: req.body.apellido,
            dirección: req.body.dirección,
            email: req.body.email,
            teléfono: req.body.teléfono,
            celular: req.body.celular,
            linkconsg: req.body.link,
            codIcfes: req.body.codicfes,
            familiar: req.body.familiar,
            estrato: req.body.estrato,
            colegiogrado: req.body.colegio, 
        }
    },
      function(error, info){
         if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudieron modificar los datos',
                error
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

      //Proceso para actualizar con PUT
        router.put('/uni-actualizar/:id', (req, res) => {
        let body = req.body;
        UniSchema.updateOne({'idIcfes': body.id}, {
        $set: req.body
    },
       function(error, info) {
          if (error) {
              res.json ({
                resultado: false,
                msg: 'No se pudieron modificar los datos',
                error
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

     //Proceso para eliminar
      router.post('/uni-eliminar/:id', (req, res)=> {
      let params = req.params;
      UniSchema.deleteOne({ 'idIcfes': params.id}, {
        $set: req.body
    },
     function(error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudieron eliminar los datos',
                error
            });
        } else {
            res.json({
                resultado: true,
                msg: 'Se eliminaron los datos correctamente',
                info: info
            })
        }
    }
    )
});

module.exports = router;
