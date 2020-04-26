var Xofer = require('./../models/xofer')

var XoferController = {
    getXofer: function(req,res){
        Xofer.find({}).exec((err,xofers)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!xofers) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({xofers});
        });
    },
    getXofer: function(req,res){
        var idXofer = req.params.xoferId;
        if (idXofer == null) return res.status(500).send({message:'No has dit cap ID'});

        Xofer.findById(idXofer).exec((err,xoferConsultat)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!xofer) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({xofer: xoferConsultat});
        });
    },
    saveXofer : function (req,res){
        var xofer = new Xofer();

        var params =  req.body;

        xofer.nom=params.nom;
        xofer.cognom=params.cognom;
        xofer.dataCarnet=params.dataCarnet;
        xofer.telefon=params.telefon;
        
        xofer.save((err, xoferGuardat)=>{
            if(err) return res.status(500).send({message:'Error al desar el xofer'});

            if(!xoferGuardat) return res.status(404).send({message:'Xofer no desat'});

            return res.status(200).send({xofer: xoferGuardat, message:'Xofer Guardat'});
        });

    },
    updateXofer : function(req,res){
        var xoferId = req.params.xoferId;
        var update = req.body;

        if (xoferId == null) return res.status(500).send({message:'No has dit cap ID'});

        Xofer.findByIdAndUpdate(xoferId,update,{new:true},(err,XoferUpdate)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!XoferUpdate) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({xofer: XoferUpdate});
        });

    },
    deleteXofer : function(req,res){
        var xoferId = req.params.xoferId;
        if (xoferId == null) return res.status(500).send({message:'No has dit cap ID'});

        Xofer.findByIdAndDelete(xoferId,(err,xoferRemoved)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!xoferRemoved) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({xofer: xoferRemoved});
        })

    },
    
}

module.exports = XoferController;