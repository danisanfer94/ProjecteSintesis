const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'/dist/OnlineTaxi')));

app.listen(process.env.PORT || 8080);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sintesis',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {
        console.log("Connectat a la BD");
    })
.catch(err => console.log(err));



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    if ('::1'==req.connection.remoteAddress) {
        next();
    }else{
        console.log('no authorized');
        res.sendFile(path.join(__dirname,'server/unauthorized.html')); 
    }
});

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POSTS, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
var rutes = require('./server/routes');
app.use('/api',rutes);
