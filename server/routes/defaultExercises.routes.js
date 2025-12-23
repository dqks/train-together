const Router = require('express');

const router = new Router();

const defaultExerciseController = require('../controller/defaultExercises.controller');

router.get('/default-exercise', defaultExerciseController.getDefaultExercises);

module.exports = router;
