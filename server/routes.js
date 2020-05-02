var express = require('express');
var cotxeController = require('./controller/cotxeController');
var xoferController = require('./controller/xoferController');
var clientController = require('./controller/clientController');
var viatgeController = require('./controller/viatgeController');


var router = express.Router();

//Cotxe routes
router.get('/cotxes',cotxeController.getCotxes);
router.get('/cotxe/:cotxeId',cotxeController.getCotxe);
router.post('/savecotxe',cotxeController.saveCotxe);
router.put('/cotxe/:cotxeId',cotxeController.updateCotxe);
router.delete('/cotxe/:cotxeId',cotxeController.deleteCotxe);

//Xofer routes
router.get('/xofers',xoferController.getXofers);
router.get('/xofer/:xoferId',xoferController.getXofer);
router.post('/savexofer',xoferController.saveXofer);
router.put('/xofer/:xoferId',xoferController.updateXofer);
router.delete('/xofer/:xoferId',xoferController.deleteXofer);

//Client routes
router.get('/clients',clientController.getClients);
router.get('/client/:clientId',clientController.getClient);
router.post('/saveclient',clientController.saveClient);
router.put('/client/:clientId',clientController.updateClient);
router.delete('/client/:cliendId',clientController.deleteClient);
//login and eslogged
router.post('/login',clientController.loginClient);
router.post('/logged',clientController.ClientLogged);
router.post('/logadmin',clientController.AdminLogged);
router.post('/logxofer',xoferController.xoferLogged);

//Viatge routes
router.get('/viatges',viatgeController.getViatges);
router.get('/viatge/:viatgeId',viatgeController.getViatge);
router.post('/saveviatge/:clientId',viatgeController.saveViatge);
router.put('/viatge/:viatgeId',viatgeController.updateViatge);
router.delete('/viatge/:viatgeId',viatgeController.deleteViatge);

module.exports = router;