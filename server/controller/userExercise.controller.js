const db = require('../db');

class UserExerciseController {
    async createUserExercise(req, res) {
        const { name, progressionType } = req.body;

        const newExercise = await db
            .query(
                'INSERT INTO user_exercises (name, id_user, id_exercise_progression_type) '
                + 'values ($1, $2, (SELECT id FROM exercise_progression_types WHERE exercise_progression_types.name = $3)) RETURNING *',
                [name, 3, progressionType],
            );

        res.json(newExercise.rows);
    }

    async getUserExercises(req, res) {

    }

    async getOneUserExercise(req, res) {

    }

    async updateUserExercise(req, res) {

    }

    async deleteUserExercise(req, res) {

    }
}

module.exports = new UserExerciseController();
