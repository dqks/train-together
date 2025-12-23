const db = require('../db');

class DefaultExerciseController {
    async getDefaultExercises(req, res) {
        const defaultExercises = await db
            .query('SELECT id, name FROM default_exercises ORDER BY name ASC');
        res.json(defaultExercises.rows);
    }
}

module.exports = new DefaultExerciseController();
