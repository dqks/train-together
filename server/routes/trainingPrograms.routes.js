const Router = require('express');

const router = new Router();

const trainingProgramsController = require('../controller/trainingPrograms.controller');

router.get('/training-programs', trainingProgramsController.getTrainingPrograms);
router.get('/training-programs/user/:userId', trainingProgramsController.getUserTrainingPrograms);
router.post('/training-programs', trainingProgramsController.createTrainingProgram);

module.exports = router;
