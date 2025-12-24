const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

const userRouter = require('./routes/user.routes');
const userExerciseRouter = require('./routes/userExercise.routes');
const defaultExerciseRouter = require('./routes/defaultExercises.routes');
const trainingProgramsRouter = require('./routes/trainingPrograms.routes');
const musclesRouter = require('./routes/muscle.routes');
const equipmentRouter = require('./routes/equipment.routes');

app.use(require('cors')());

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', userExerciseRouter);
app.use('/api', defaultExerciseRouter);
app.use('/api', trainingProgramsRouter);
app.use('/api', musclesRouter);
app.use('/api', equipmentRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
