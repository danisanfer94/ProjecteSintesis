var Client = require('./../models/client')

var ClientController = {
    
    getClients : function(req,res){
        Client.find({}).exec((err,clients)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!clients) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({clients}); 
        });
    },
    getClient : function(req,res){
        var clientId = req.params.clientId;
        if (clientId == null) return res.status(500).send({message:'No has dit cap ID'})
        Client.findById(clientId).exec((err,client)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!client) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({client});
        });
    },
    saveClient : function(req,res){
        var client = new Client();
        var params = req.body;

        client.nom = params.nom;
        client.cognoms = params.cognoms;
        client.email = params.email;
        client.contrasenya = params.contrasenya;
        client.telefon = params.telefon;

        client.save((err,clientGuardat)=>{
            if(err) return res.status(500).send({message:'Error al desar el client'});
            if(!clientGuardat) return res.status(404).send({message:'Client no desat'});
            return res.status(200).send({client: clientGuardat, message:'Client Guardat'});
        });
    },
    updateClient : function(req,res){
        var clientId = req.params.clientId;
        if (clientId == null) return res.status(500).send({message:'No has dit cap ID'})
        var update = req.body;

        Client.findByIdAndUpdate(clientId,update,{new:true},(err,ClientUpdate)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!ClientUpdate) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({client: ClientUpdate});
        });
    },
    deleteClient : function(req,res){
        var clientId = req.params.clientId;
        if (clientId == null) return res.status(500).send({message:'No has dit cap ID'})
        
        Client.findByIdAndDelete(clientId,(err,clientRemoved)=>{
            if(err) return res.status(500).send({message:'Error actualizant les dades'});
            if(!clientRemoved) return res.status(404).send({message:'No existeixen les dades'});
            return res.status(200).send({cotxe: clientRemoved});
        });
    }
}

module.exports = ClientController;