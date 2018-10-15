const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

let Schema = mongoose.Schema;

let rondaSchema = new Schema({
    juego: { type: Schema.Types.ObjectId, ref: 'Juego', required: [true, 'El id de juego es obligatorio'] },
    nroRonda: { type: Number, required: [true, 'El numero de ronda es obligatorio'] },
    objP1: { type: String, required: [true, 'El Objeto es necesario'] },
    objP2: { type: String, required: [true, 'El Objeto es necesario']  },
    result: { type: String, required: [true, 'El resultado es obligatorio'] }
});

rondaSchema.methods.toJSON = function() {

    let ronda = this;
    let rondaObject = ronda.toObject();

    return rondaObject;
}


module.exports = mongoose.model('Ronda', rondaSchema);
