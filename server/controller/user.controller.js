const db = require('../db');

class UserController {
    async createUser(req, res) {
        try {
            const { email, nickname, password } = req.body;

            if (
                (!email || email.length === 0)
                || (!nickname || nickname.length === 0)
                || (!password || password.length === 0)) {
                return res.status(403).json({ message: 'Incorrect data' });
            }

            const newUser = await db
                .query(
                    'INSERT INTO users (email, nickname, password, id_role) '
                    + 'values ($1, $2, $3, (SELECT id FROM roles WHERE roles.name = $4)) RETURNING id',
                    [email, nickname, password, 'Пользователь'],
                );

            return res.json(newUser.rows[0]);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const users = await db.query('SELECT id, email, password FROM users');

            const userFromBd = users.rows.find(
                (user) => user.email === email && user.password === password,
            );

            if (userFromBd) {
                return res.json({ id: userFromBd.id });
            }

            return res.status(403).json({ message: 'User not found' });
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
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
