var Cotxe = require('./../models/cotxe');

var CotxeController = {
    index: function (req,res) {
        return res.status(200).send({message:'hola'});
    },
    getCotxes : function(req,res){
        Cotxe.find({}).exec((err,cotxes)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!cotxes) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({cotxes});
        });
    },
    getCotxe : function(req,res){
        var cotxeId =  req.params.cotxeId;
        if (cotxeId == null) return res.status(500).send({message:'No has dit cap ID'})
        Cotxe.findById(cotxeId).exec((err,cotxe)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!cotxe) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({cotxe});
        });
    },
    saveCotxe : function(req,res) {
        var cotxe = new Cotxe();

        var params =  req.body;
        
        cotxe.matricula = params.matricula;
        cotxe.marca = params.marca;
        cotxe.places = params.places;
        cotxe.dataITV = params.dataITV;
        cotxe.daraSeguro = params.dataSeguro;

        cotxe.save((err, cotxeGuardat)=>{
            if(err) return res.status(500).send({message:'Error al desar el cotxe'});

            if(!cotxeGuardat) return res.status(404).send({message:'Cotxe no desat'});

            return res.status(200).send({cotxe: cotxeGuardat, message:'Cotxe Guardat'});
        });
    },
    updateCotxe : function(req,res){
        var cotxeId = req.params.cotxeId;
        var update = req.body;
        if (cotxeId == null) return res.status(500).send({message:'No has dit cap ID'})

        Cotxe.findByIdAndUpdate(cotxeId,update,{new:true},(err,CotxeUpdate)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!CotxeUpdate) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({cotxe: CotxeUpdate});
        });
    },
    deleteCotxe : function(req,res){
        var cotxeId = req.params.cotxeID;
        if (cotxeId == null) return res.status(500).send({message:'No has dit cap ID'})

        Cotxe.findByIdAndDelete(cotxeId,(err,cotxeRemoved)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!cotxeRemoved) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({cotxe: cotxeRemoved});
        });
    }
    

}

module.exports = CotxeController;
