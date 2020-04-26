var Viatge = require('./../models/viatge')

var ViatgeController = {
    getViatges : function(req,res){
        Viatge.find({}).populate('Cotxe').populate('Xofer')
        .populate('Client').exec((err,viatges)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!viatges) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({viatges}); 
        });
    },
    getViatge : function(req,res){
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({message:'No has dit cap ID'});
        Viatge.findById(viatgeId).populate('Cotxe').populate('Xofer')
        .populate('Client').exec((err,viatge)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!viatge) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({viatge});
        });
    },
    saveViatge : function(req,res){
        var viatge = new Viatge();
        var params = req.body;

        var cotxeId = req.params.cotxeId;
        var xoferId = req.params.xoferId;
        var clientId = req.params.clientId;
        if (cotxeId == null) return res.status(500).send({message:'No has dit ID de cotxe'})
        if (xoferId == null) return res.status(500).send({message:'No has dit cap ID de xofer'})
        if (clientId == null) return res.status(500).send({message:'No has dit cap ID de client'})


        viatge.origen = params.origen;
        viatge.desti = params.desti;
        viatge.km = params.km;
        viatge.preu = params.preu;
        viatge.tarifa = params.tarifa;
        viatge.cotxe = cotxeId;
        viatge.xofer = xoferId;
        viatge.client = clientId;

        viatge.save((err,viatgeGuardat)=>{
            if(err) return res.status(500).send({message:'Error al desar el client'});
            if(!viatgeGuardat) return res.status(404).send({message:'Viatge no desat'});
            return res.status(200).send({viatge: viatgeGuardat, message:'Viatge Guardat'});
        });

    },
    updateViatge : function(req,res){
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({message:'No has dit cap ID'});
        var update = req.body;

        Viatge.findByIdAndUpdate(viatgeId,update,{new:true},(err,ViatgeUpdate)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!ViatgeUpdate) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({viatge: ViatgeUpdate});
        })
    },
    deleteViatge : function(req,res){
        var viatgeId = req.params.viatgeId;
        if (viatgeId == null) return res.status(500).send({message:'No has dit cap ID'});
       
        Viatge.findOneAndDelete(viatgeId,(err,viatgeRemoved)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!viatgeRemoved) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({viatge: viatgeRemoved});
        });
    }
}

module.exports = ViatgeController;