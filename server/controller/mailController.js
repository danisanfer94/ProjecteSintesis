var nodemailer = require('nodemailer');

var mailController = {
    transporter : nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'taxionline.sintesis@gmail.com',
            pass: process.env.MAILPASS
             
        }
    }),
    enviarReserva : function(mailXofer){
       let  mailOptions = {
            from : 'taxionline.sintesis@gmail.com',
            to: mailXofer,
            subject: 'Avis de reserva',
            html: '<p>Nova reserva al panell del xofer</p>'
        };
        this.transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }else{
                console.log('Message sent: %s',info.messageId)
            }     
        });
    },
    confirmarReserva : function(mailClient,viatge){
        let  mailOptions = {
            from : 'taxionline.sintesis@gmail.com',
            to: mailClient,
            subject: 'Avis de reserva',
            html: '<p>Un xofer ha confirmat la teva reserva, pots consultar els detalls a https://online-taxis.herokuapp.com/reserva-details/'+viatge._id+'</p>'
        };
        this.transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }else{
                console.log('Message sent: %s',info.messageId)
            }     
        }); 
    }

    
}

module.exports = mailController;
