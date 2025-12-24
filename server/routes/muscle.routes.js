const Router = require('express');

const router = new Router();

const muscleController = require('../controller/muscle.controller');

router.get('/muscles', muscleController.getMuscles);

module.exports = router;
