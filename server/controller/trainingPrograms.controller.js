const db = require('../db');

class TrainingProgramsController {
    async getTrainingPrograms(req, res) {
        // public можно не возвращать
        const defaultExercises = await db
            .query('SELECT t.id, t.name, t.description, u.nickname, public '
                + 'FROM training_programs t '
                + 'INNER JOIN users u ON t.id_user = u.id '
                + 'WHERE public = true '
                + 'ORDER BY t.name');
        res.json(defaultExercises.rows);
    }
}

module.exports = new TrainingProgramsController();
