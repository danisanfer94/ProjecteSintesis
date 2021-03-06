var express = require('express');
var cotxeController = require('../controller/cotxeController');
var xoferController = require('../controller/xoferController');
var clientController = require('../controller/clientController');
var viatgeController = require('../controller/viatgeController');


var router = express.Router();
// //login islogged registre
// router.post('/login', clientController.loginClient);
// router.post('/logged', clientController.ClientLogged);
// router.post('/logadmin', clientController.AdminLogged);
// router.post('/logxofer', xoferController.xoferLogged);
// router.post('/saveclient', clientController.saveClient);

//Cotxe routes
router.get('/cotxes', cotxeController.getCotxes);
router.get('/cotxe/:cotxeId', cotxeController.getCotxe);
router.post('/savecotxe', cotxeController.saveCotxe);
router.put('/cotxe/:cotxeId', cotxeController.updateCotxe);
router.delete('/cotxe/:cotxeId', cotxeController.deleteCotxe);

//Xofer routes
router.get('/xofers', xoferController.getXofers);
router.get('/xofer/:xoferId', xoferController.getXofer);
router.post('/savexofer', xoferController.saveXofer);
router.put('/xofer/:xoferId', xoferController.updateXofer);
router.delete('/xofer/:xoferId', xoferController.deleteXofer);

//Client routes
router.get('/clients', clientController.getClients);
router.get('/client/:clientId', clientController.getClient);
router.put('/client/:clientId', clientController.updateClient);
router.put('/pass/:clientId', clientController.updatePass);
router.delete('/client/:clientId', clientController.deleteClient);



//Viatge routes
router.get('/viatges', viatgeController.getViatges);
router.get('/viatge/:viatgeId', viatgeController.getViatge);
router.get('/viatge2/:clientId', viatgeController.getViatgeClient);
router.post('/saveviatge/:clientId', viatgeController.saveViatge);
router.put('/viatge/:viatgeId', viatgeController.updateViatge);
router.delete('/viatge/:viatgeId', viatgeController.deleteViatge);

module.exports = router;