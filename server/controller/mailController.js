var nodemailer = require('nodemailer');

var mailController = {
    transporter : nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: '',
            pass: process.env.MAILPASS
        }
    }),
    enviarReserva : function(mail){
       let  mailOptions = {
            from : '',
            to: mail,
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
    }

    
}

module.exports = mailController;