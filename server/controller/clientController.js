var Client = require('./../models/client')
var service = require('./../services');
var bcrypt = require('bcrypt');

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
        var error = false;
        Client.find({}).exec((err,clients)=>{
            clients.forEach(cliente => {                                
                if(cliente.email==params.email){
                    error = true;                            
                }        
            });
            if (error) {
                return res.status(500).send({message:'El mail ya existeix'});
            }
        
            client.nom = params.nom;
            client.cognoms = params.cognoms;
            client.email = params.email;
            client.contrasenya = '';
            client.telefon = params.telefon;
            client.token='';
            
            client.save((err,clientGuardat)=>{
                if(err) return res.status(500).send({message:err});
                if(!clientGuardat) return res.status(404).send({message:'Client no desat'});
                console.log(clientGuardat);            
                //Creem el token i el guardem en el nou client creat
                clientGuardat.token=service.createToken(clientGuardat);
                //guardem el token i la contreasña
                bcrypt.hash(params.contrasenya,6,function(err,hash){
                    clientGuardat.contrasenya=hash;
                    Client.findByIdAndUpdate(clientGuardat._id,clientGuardat,{new:true},(err,ClientUpdate)=>{
                        if(err) return res.status(500).send({message:'Error actualizant les dades'});
                        if(!ClientUpdate) return res.status(404).send({message:'No existeixen les dades'});
                        return res.status(200).send({client: ClientUpdate,message:'Client Guardat'});
                    });
                });
            });
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
    },
    loginClient : function(req,res){
        var login = req.body;
        Client.findOne({'email':login.username}).exec((err,client)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!client) return res.status(404).send({message:'El usuari no existeix'});

            bcrypt.compare(login.password, client.contrasenya,function(err,match){
                if(match){
                    return res.status(200).send({token:client.token , message:'Logejat correctament'});
                }else{
                    console.log(match);
                    
                    return res.status(500).send({message:'Contraseña incorrecta'});
                }
            });
            
        });
    },
    ClientLogged : function(req,res){
        var token = req.body.token;

        var id = service.checkToken(token);
        
        Client.findById(id).exec((err,client)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!client) return res.status(404).send({message:'No hi han dades'});
            return res.status(200).send({client});
        });

    },
    AdminLogged : function(req,res){
        var token = req.body.token;

        var id = service.checkToken(token);
        
        Client.findById(id).exec((err,client)=>{
            if(err) return res.status(500).send({message:'Error al retornar dades'});
            if(!client) return res.status(404).send({message:'No hi han dades'});
            if(client.email=='admin@taxionline.cat') return res.status(200).send({client});
            return res.status(404).send({message:'No admin'})
        });

    }
}

module.exports = ClientController;