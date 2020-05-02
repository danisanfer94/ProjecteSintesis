var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var XoferSchema = mongoose.Schema({
    nom:String,
    cognoms:String,
    dataCarnet:String,
    mail:String,
    telefon:String,
    // cotxe:{ type: Schema.Types.ObjectId, ref: 'Cotxe'}
});

module.exports = mongoose.model('Xofer',XoferSchema);