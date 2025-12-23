const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

const userRouter = require('./routes/user.routes');
const userExerciseRouter = require('./routes/userExercise.routes');

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', userExerciseRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
