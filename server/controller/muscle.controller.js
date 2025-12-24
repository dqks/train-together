const db = require('../db');

class MuscleController {
    async getMuscles(req, res) {
        try {
            const muscles = await db.query('SELECT id, name FROM muscles');
            return res.json(muscles.rows);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new MuscleController();
