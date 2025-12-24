const db = require('../db');

class EquipmentController {
    async getEquipment(req, res) {
        try {
            const equipment = await db.query('SELECT id, name FROM equipment');
            return res.json(equipment.rows);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new EquipmentController();
