var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = mongoose.Schema({
    nom:String,
    cognoms:String,
    email:String,
    contrasenya:String,
    telefon:String,
});

module.exports = mongoose.model('Client',ClientSchema);

