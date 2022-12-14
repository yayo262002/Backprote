const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HombresSchema = new Schema(
    {
        productName: {type: String, required: true},
        photo: {type: Array, required: false},
        description:{type: String, required: false},
        talla: {type: Array, required: true},
        precio: {type: Array, required: true},
        valoracion: {type: Number, required: true},
        
    }, 
);

const Hombre = mongoose.model('hombres', HombresSchema);

module.exports = Hombre;