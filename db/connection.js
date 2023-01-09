const mysql = require('mysql2')


const conn = mysql.createConnection({
    host: process.env.host,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

conn.connect(function (err) {
    if (err) throw err;
    console.log(`connected ${process.env.DB_PASS}`);
})

module.exports = {
    conn
}