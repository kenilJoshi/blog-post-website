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

homeRoute.get('/getUser', (req, res) => {
    let sql = `SELECT * FROM railway.posts
    WHERE Title='${req.body.Title}';`
    conn.query(sql, function (err, result) {
        if (err) throw err
        res.render()
    })
})


module.exports = {
    homeRoute
}