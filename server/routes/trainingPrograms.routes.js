const Router = require('express');

const router = new Router();

const trainingProgramsController = require('../controller/trainingPrograms.controller');

router.get('/training-programs', trainingProgramsController.getTrainingPrograms);

module.exports = router;
