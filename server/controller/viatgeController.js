var Viatge = require('./../models/viatge');
var Xofer = require('./../models/xofer');
var mailController = require('./mailController');

var ViatgeController = {
    getViatges: function(req, res) {
        Viatge.find({}).populate('cotxe').populate('xofer')
        .populate('client').sort([['data', -1]]).exec((err,viatges)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!viatges) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({viatges}); 
        });
    },
    getViatge: function(req, res) {
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({ message: 'No has dit cap ID' });
        Viatge.findById(viatgeId).populate('cotxe').populate('xofer')
            .populate('client').exec((err, viatge) => {
                if (err) return res.status(500).send({ message: 'Error al retornar dades' });
                if (!viatge) return res.status(404).send({ message: 'No hi han dades' });
                return res.status(200).send({ viatge });
            });
    },
    getViatgeClient: function(req, res) {
        var clientId = req.params.clientId;
        if (clientId == null) return res.status(500).send({ message: 'No has dit cap ID' });
        Viatge.find({ client: clientId }).exec((err, viatge) => {
            if (err) return res.status(500).send({ message: 'Error al retornar dades' });
            if (!viatge) return res.status(404).send({ message: 'No hi han dades' });
            return res.status(200).send({ viatge });
        });
    },
    saveViatge: function(req, res) {
        var viatge = new Viatge();
        var params = req.body;

        // var cotxeId = req.params.cotxeId;
        // var xoferId = req.params.xoferId;
        var clientId = req.params.clientId;
        // if (cotxeId == null) return res.status(500).send({message:'No has dit ID de cotxe'})
        // if (xoferId == null) return res.status(500).send({message:'No has dit cap ID de xofer'})
        if (clientId == null) return res.status(500).send({ message: 'No has dit cap ID de client' })


        viatge.origen = params.origen;
        viatge.desti = params.desti;
        viatge.km = params.km;
        viatge.data = params.data;
        viatge.hora = params.hora;
        viatge.places = params.places;
        viatge.preu = params.preu;
        viatge.comentari = params.comentari;
        viatge.tarifa = params.tarifa;
        viatge.crodes = params.crodes;
        viatge.client = clientId;
        viatge.confirmat = params.confirmat;

        viatge.save((err, viatgeGuardat) => {
            if (err) return res.status(500).send({ message: 'Error al desar el client' });
            if (!viatgeGuardat) return res.status(404).send({ message: 'Viatge no desat' });
            return res.status(200).send({ viatge: viatgeGuardat, message: 'Viatge Guardat' });
        });
        Xofer.find({}).select('mail -_id').exec((err,xofers)=>{
            console.log(xofers);
            xofers.forEach(xofer => {
                mailController.enviarReserva(xofer.mail);
            });
        });

    },
    updateViatge: function(req, res) {
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({ message: 'No has dit cap ID' });
        var update = req.body;
        
        Viatge.findByIdAndUpdate(viatgeId, update, { new: true }, (err, ViatgeUpdate) => {
            if (err) return res.status(500).send({ message: 'Error actualizant les dades' });
            if (!ViatgeUpdate) return res.status(404).send({ message: 'No existeixen les dades' });
            return res.status(200).send({ viatge: ViatgeUpdate });
        })
    },
    deleteViatge: function(req, res) {
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({ message: 'No has dit cap ID' });

        Viatge.findOneAndDelete(viatgeId, (err, viatgeRemoved) => {
            if (err) return res.status(500).send({ message: 'Error actualizant les dades' });
            if (!viatgeRemoved) return res.status(404).send({ message: 'No existeixen les dades' });
            return res.status(200).send({ viatge: viatgeRemoved });
        });
    },
    confirmarViatge: function(req,res){
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({ message: 'No has dit cap ID' });

        Viatge.findById(viatgeId).populate('client').exec((err,viatge)=>{
            mailController.confirmarReserva(viatge.client.email,viatge);
            return res.status(200).send({missatge: 'mail enviat'});
        });
    }
}

module.exports = ViatgeController;