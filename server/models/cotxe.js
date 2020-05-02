var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CotxeSchema = mongoose.Schema({
    matricula:String,
    marca:String,
    model:String,
    places: Number,
    dataITV: String,
    dataSeguro: String,
    // xofer:{ type: Schema.Types.ObjectId, ref: 'Xofer'}
});

module.exports = mongoose.model('Cotxe',CotxeSchema);