const express = require("express")
const mysql = require('mysql2')
const { conn } = require("../db/connection")
const homeRoute = new express.Router()

homeRoute.get('/', (req, res) => {
    res.send("kenil joshi")
})

homeRoute.get('/home', (req, res) => {
    conn.query("SELECT * FROM railway.posts;", function (err, result) {
        if (err) throw err
        res.render("../views/home", { results: result })
    })
})

module.exports = {
    homeRoute
}