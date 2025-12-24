const Router = require('express');

const router = new Router();

const trainingProgramsController = require('../controller/trainingPrograms.controller');

router.get('/training-programs', trainingProgramsController.getTrainingPrograms);
router.get('/training-programs/user/:userId', trainingProgramsController.getUserTrainingPrograms);

module.exports = router;
