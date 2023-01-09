const express = require('express')
const { conn } = require('../db/connection')

const postRoute = new express.Router()

postRoute.post('/blog/post', (req, res) => {
    const sql = ' INSERT INTO posts SET ?'

    const bodyObj = {
        Title: req.body.Title,
        main_body: req.body.main_body
    }

    console.log(req.body);
    conn.query(sql, bodyObj, (err, result) => {
        if (err) throw err
        console.log(result);
        res.redirect('/home')
    })
})

module.exports = {
    postRoute
}