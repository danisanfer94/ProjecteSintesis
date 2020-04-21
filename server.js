const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'/dist/OnlineTaxi')));

app.listen(process.env.PORT || 8080);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sintesis')
.then(()=> {
        console.log("Connectat a la BD");
    })
.catch(err => console.log(err));



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    console.log(req.connection.remoteAddress);

    if ('::1'==req.connection.remoteAddress) {
        next();
    }else{
        console.log('no authorized');
        next();
    }
})

app.get('/api',(req,res)=>{
    res.status(200).send({
        message: "hola"
    });
});
