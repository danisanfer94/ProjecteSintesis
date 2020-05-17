var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = mongoose.Schema({
    // _id:String,
    nom:String,
    cognoms:String,
    email:String,
    contrasenya:String,
    telefon:String,
    rol:String,
    token:String,
});

module.exports = mongoose.model('Client',ClientSchema);

