var express = require('express');
var cotxeController = require('../controller/cotxeController');
var xoferController = require('../controller/xoferController');
var clientController = require('../controller/clientController');
var viatgeController = require('../controller/viatgeController');

var router = express.Router();

router.get('/cotxes', cotxeController.getCotxes);
router.get('/cotxe/:cotxeId', cotxeController.getCotxe);
router.post('/savecotxe', cotxeController.saveCotxe);
router.put('/cotxe/:cotxeId', cotxeController.updateCotxe);
router.delete('/cotxe/:cotxeId', cotxeController.deleteCotxe);


router.get('/xofers', xoferController.getXofers);
router.get('/xofer/:xoferId', xoferController.getXofer); //el seu
router.put('/xofer/:xoferId', xoferController.updateXofer);


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
router.get('/confirmar/:viatgeId',viatgeController.confirmarViatge);

module.exports = router;