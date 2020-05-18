var express = require('express');
var clientController = require('../controller/clientController');
var viatgeController = require('../controller/viatgeController');

var router = express.Router();

// router.get('/viatges', viatgeController.getViatges); //el seu
router.get('/viatge2/:clientId', viatgeController.getViatgeClient);
router.get('/viatge/:viatgeId', viatgeController.getViatge); //el seu
router.post('/saveviatge/:clientId', viatgeController.saveViatge);

router.get('/client/:clientId', clientController.getClient); //el seu
router.put('/client/:clientId', clientController.updateClient); // el seu
router.put('/pass/:clientId', clientController.updatePass); // el seu
router.delete('/client/:clientId', clientController.deleteClient); //el seu

module.exports = router;