const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '1111',
    host: 'localhost',
    port: 5432,
    database: 'kachalka',
});

module.exports = pool;
