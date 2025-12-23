const Router = require('express');

const router = new Router();

const exerciseController = require('../controller/userExercise.controller');

router.post('/user-exercise', exerciseController.createUserExercise);
router.get('/user-exercise', exerciseController.getUserExercises);
router.get('/user-exercise/:id', exerciseController.getOneUserExercise);
router.put('/user-exercise', exerciseController.updateUserExercise);
router.delete('/user-exercise/:id', exerciseController.deleteUserExercise);

module.exports = router;
