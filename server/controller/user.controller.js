const db = require('../db');

class UserController {
    async createUser(req, res) {
        const { email, nickname, password } = req.body;

        const newUser = await db
            .query(
                'INSERT INTO users (email, nickname, password, id_role) '
                + 'values ($1, $2, $3, (SELECT id FROM roles WHERE roles.name = $4)) RETURNING *',
                [email, nickname, password, 'Пользователь'],
            );

        res.json(newUser.rows);
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users');
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const { id } = req.params;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows);
    }

    async updateUser(req, res) {
        const {
            id, nickname, password, email,
        } = req.body;
        const user = await db
            .query(
                'UPDATE users SET nickname = $1, password = $2, email = $3 WHERE id = $4 RETURNING *',
                [nickname, password, email, id],
            );
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows);
    }
}

module.exports = new UserController();
