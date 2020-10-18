const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}
