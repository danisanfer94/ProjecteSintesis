var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViatgeSchema = mongoose.Schema({
    origen:String,
    desti:String,
    data:String,
    hora:String,
    places:Number,
    comentari:String,
    confirmat:String,
    cotxe:{ type: Schema.Types.ObjectId, ref: 'Cotxe'},
    xofer:{ type: Schema.Types.ObjectId, ref: 'Xofer'},
    client:{ type: Schema.Types.ObjectId, ref: 'Client'},
    // ----Dades introduides per el chofer durant la confirmacio
    preuAprox:String,
    tarifa:String,
    //----Dades despres de finatlzar el viatge
    preu:String,
    km:Number,




});

module.exports = mongoose.model('Viatge',ViatgeSchema);
