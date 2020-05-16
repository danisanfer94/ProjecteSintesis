var express = require('express');
var xoferController = require('../controller/xoferController');
var clientController = require('../controller/clientController');


var router = express.Router();
//login islogged registre
router.post('/login', clientController.loginClient);
router.post('/logged', clientController.ClientLogged);
router.post('/logadmin', clientController.AdminLogged);
router.post('/logxofer', xoferController.xoferLogged);
router.post('/saveclient', clientController.saveClient);

module.exports = router;