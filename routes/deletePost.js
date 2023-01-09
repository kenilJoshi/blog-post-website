const express = require('express')
const { conn } = require('../db/connection')

const deleteRoute = express.Router()

deleteRoute.get('/:id/delete', (req, res) => {
    const _id = req.params.id.replace(":", "")
    let sql = `DELETE FROM posts WHERE idposts=${_id}`
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
        res.redirect('/')
    })

})

module.exports = {
    deleteRoute
}