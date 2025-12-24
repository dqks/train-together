const Router = require('express');

const router = new Router();

const equipmentController = require('../controller/equipment.controller');

router.get('/equipment', equipmentController.getEquipment);

module.exports = router;
