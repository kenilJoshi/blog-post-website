const express = require('express')

const { conn } = require('../db/connection')

const updateRoute = new express.Router()

updateRoute.post('/:id/update?', (req, res) => {
    console.log('kenil');
    let newObj = req.body
    let _id = req.params.id.replace(":", "")
    let sql = `UPDATE posts SET ? WHERE idPosts=${_id} `

    conn.query(sql, newObj, (err, result) => {
        if (err) throw err
        console.log(result);
        res.redirect('/home')
    })

})

module.exports = {
    updateRoute
}