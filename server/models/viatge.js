var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViatgeSchema = mongoose.Schema({
    origen: String,
    desti: String,
    km: Number,
    data: String,
    hora: String,
    places: Number,
    preu: String,
    tarifa: String,
    crodes: Boolean,
    comentari: String,
    confirmat: String,
    cotxe: { type: Schema.Types.ObjectId, ref: 'Cotxe' },
    xofer: { type: Schema.Types.ObjectId, ref: 'Xofer' },
    client: { type: Schema.Types.ObjectId, ref: 'Client' }
});

module.exports = mongoose.model('Viatge', ViatgeSchema);