const express = require('express');

const Juego = require('../models/juego');

const app = express();


// ============================
// Mostrar todos los juegos
// ============================
app.get('/juegos', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde); // página

    let limite = req.query.limite || 5; // cant. de registros
    limite = Number(limite);

    Juego.find({ /*condición: */ estado: true }, /*"select" del get: */ 'fecha player1 player2 winner')
        .skip(desde)
        .limit(limite)
        .exec((err, juegos) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Juego.countDocuments({ estado: true }, (err, conteo) => {

                res.json({
                    ok: true,
                    juegos,
                    cuantos: conteo
                });

            });


        });


});


// ============================
// Crear nuevo juego
// ============================
app.post('/juegos', function(req, res) {

    let body = req.body;

    let juego = new Juego({
        fecha: body.fecha,
        player1: body.p1,
        player2: body.p2,
        winner: body.winner
    });

    juego.save((err, juegoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            juego: juegoDB
        });

    });

});



// ===========================================================================

/* app.delete('/juegos/:id', function(req, res) {


    let id = req.params.id;

    // Juego.findByIdAndRemove(id, (err, juegoBorrado) => {

    let cambiaEstado = {
        estado: false
    };

    Juego.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, juegoBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!juegoBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Juego no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            juego: juegoBorrado
        });

    });

}); */


module.exports = app;
