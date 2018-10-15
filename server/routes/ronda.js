const express = require('express');

let app = express();

let Ronda = require('../models/ronda');


// ============================
// Mostrar rondas
// ============================
app.get('/rondas/', (req, res) => {

    Ronda.find((err, rondas) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            rondas
        });

    });

});


// ============================
// Mostrar rondas por ID_Juego
// ============================
app.get('/rondas/buscar/:id', (req, res) => {

    let id = req.params.id;

    Ronda.find( {juego: id}, (err, rondas) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rondas) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'El ID del juego no es correcto'
                }
            });
        }


        res.json({
            ok: true,
            rondas
        });

    });

});

// ============================
// Crear nueva Ronda
// ============================
app.post('/rondas', (req, res) => {

    let body = req.body;

    let ronda = new Ronda({
        juego: body.juego,
        nroRonda: body.nroRonda,
        objP1: body.objP1,
        objP2: body.objP2,
        result: body.result
    });


    ronda.save((err, rondaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rondaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            ronda: rondaDB
        });

    });

});


// ============================
// Borrar Rondas
// ============================
app.delete('/rondas/:id', (req, res) => {

    let id = req.params.id;

    Ronda.findByIdAndRemove(id, (err, rondaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!rondaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Ronda Eliminada'
        });

    });


});


module.exports = app;
