const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var helmet = require('helmet');

app.use(helmet());
app.use(express.static(path.join(__dirname, '/dist/OnlineTaxi')));

app.listen(process.env.PORT || 8080);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sintesis', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connectat a la BD");
    })
    .catch(err => console.log(err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POSTS, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//public routes 
var loginRoutes = require('./server/routes/publicRoutes');
app.use('/api', loginRoutes);

// middleware for check if users is login
app.all('/api/*', async function(req, res, next) {
    let service = require('./server/services');
    let Client = require('./server/models/client');

    if (req.headers.cookie) {
        let token = req.headers.cookie.split("=")[1];
        //s'hauria de comprobar si estar caducada
        let clientId = service.checkToken(token);
        const result = await Client.findOne({ _id: clientId }).select("_id").lean();
        if (result) {
            console.log("Client accessing...");
            next();
        } else {
            console.log("Fail Backend acces from " + req.connection.remoteAddress);
            res.sendFile(path.join(__dirname, 'server/unauthorized.html'));

        }
    } else {
        console.log('No hi ha token');
        res.sendFile(path.join(__dirname, 'server/unauthorized.html'));
    }

});

// client routes
var clientRoutes = require('./server/routes/clientRoutes');
app.use('/api', clientRoutes);

//middleware for check if xofer is logged
app.all('/api/*', async function(req, res, next) {
    let service = require('./server/services');
    let Client = require('./server/models/client');
    let Xofer = require('./server/models/client');
    if (req.headers.cookie) {
        let token = req.headers.cookie.split("=")[1];
        //s'hauria de comprobar si estar caducada
        let clientId = service.checkToken(token);
        const result = (await Client.find({ _id: clientId }, 'email rol').lean());
        console.log(result);

        if (result[0].rol == 'xofer' || result[0].email == "admin@taxionline.cat") {
            console.log("Xofer accessing...");
            next();
        } else {
            console.log("Fail Backend acces from " + req.connection.remoteAddress);
            res.sendFile(path.join(__dirname, 'server/unauthorized.html'));

        }
    } else {
        console.log('No hi ha token');
        res.sendFile(path.join(__dirname, 'server/unauthorized.html'));
    }

});

//xofer routes
var xoferRoutes = require('./server/routes/xoferRoutes');
app.use('/api', xoferRoutes);

//middleware for check if admin is login
app.all('/api/*', async function(req, res, next) {
    let service = require('./server/services');
    let Client = require('./server/models/client');

    if (req.headers.cookie) {
        let token = req.headers.cookie.split("=")[1];
        //s'hauria de comprobar si estar caducada
        let clientId = service.checkToken(token);
        const result = await Client.find({ _id: clientId }, 'email rol').lean();
        if (result[0].email == "admin@taxionline.cat") {
            console.log("Admin accessing...");
            next();
        } else {
            console.log("Fail Backend acces from " + req.connection.remoteAddress);
            res.sendFile(path.join(__dirname, 'server/unauthorized.html'));

        }
    } else {
        console.log('No hi ha token');
        res.sendFile(path.join(__dirname, 'server/unauthorized.html'));
    }

});

//private routes
var rutes = require('./server/routes/routes');
app.use('/api', rutes);

app.get('/test', async function(req, res, next) {
    // let cookielist = req.headers.cookie.split("; ");
    // console.log(cookielist);
    // cookielist.forEach(cookies => {
    //     let cookie = cookies.split('=');
    //     if(cookie[0]=='token'){

    //     }
    // });




    // let service = require('./server/services');
    // let  Client = require('./server/models/client');
    // let token = req.headers.cookie.split("=")[1];        
    // //s'hauria de comprobar si estar caducada
    // let clientId = service.checkToken(token);        
    // const result = await Client.findOne({ _id: clientId }).select("_id").lean();
    // if (result){
    //     console.log("yes");
    // }
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/OnlineTaxi/index.html'))
});