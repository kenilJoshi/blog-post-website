const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Kenil@123',
    database: 'blog-crud-operation'
})

conn.connect(function (err) {
    if (err) throw err;
    console.log("connected");
})

module.exports = {
    conn
}