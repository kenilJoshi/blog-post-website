const express = require("express")
const mysql = require('mysql2')
const { conn } = require("../db/connection")
const homeRoute = new express.Router()

homeRoute.get('/', (req, res) => {
    conn.query("SELECT * FROM railway.posts;", function (err, result) {
        if (err) throw err
        res.render("../views/home", { results: result })

    })
})

homeRoute.post('/getUser', (req, res) => {
    console.log(req.body.title);
    if (req.body.title !== '') {
        let sql = `SELECT * FROM railway.posts
    WHERE Title='${req.body.title}';`
        conn.query(sql, function (err, result) {
            if (err) throw err

            res.render("../views/home", { results: result })
        })
    } else if (req.body.title === '') {
        conn.query("SELECT * FROM railway.posts;", function (err, result) {
            if (err) throw err
            res.render("../views/home", { results: result })

        })
    }
})


module.exports = {
    homeRoute
}