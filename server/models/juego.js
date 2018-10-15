const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let juegoSchema = new Schema({
    fecha: {
        type: String,
        unique: true,
        required: [true, 'La fecha es necesaria']
    },
    player1: {
        type: String,
        required: [true, 'El jugador 1 es necesario']
    },
    player2: {
        type: String,
        required: [true, 'El jugador 2 es necesario']
    },
    winner: {
        type: String,
        required: [true, 'El ganador es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }
});


juegoSchema.methods.toJSON = function() {

    let game = this;
    let gameObject = game.toObject();

    return gameObject;
}


juegoSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });


module.exports = mongoose.model('Juego', juegoSchema);