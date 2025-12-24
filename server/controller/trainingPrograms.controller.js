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

    async getUserTrainingPrograms(req, res) {
        // public можно не возвращать
        const { userId } = req.params;

        const defaultExercises = await db
            .query('SELECT t.id, t.name, t.description, u.nickname, u.id as user_id, public '
                + 'FROM training_programs t '
                + 'INNER JOIN users u ON t.id_user = u.id '
                + 'WHERE u.id = $1 '
                + 'ORDER BY t.name', [userId]);

        defaultExercises.rows.map((program) => delete program.user_id);

        res.json(defaultExercises.rows);
    }

    async createTrainingProgram(req, res) {
        try {
            const { userId, name, description } = req.body;

            const newProgram = await db
                .query(
                    'INSERT INTO training_programs (id_user, name, description, public) VALUES ($1, $2, $3, $4) RETURNING id',
                    [userId, name, description, true],
                );

            return res.json(newProgram.rows[0]);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new TrainingProgramsController();
