const express = require('express')

const { conn } = require('../db/connection')

const updateRoute = new express.Router()

updateRoute.post('/:id/update?', (req, res) => {
    console.log('kenil');
    let newObj = req.body
    let _id = req.params.id.replace(":", "")
    console.log(_id);
    let sql = ''
    if (newObj.Title != '' && newObj.main_blog === '') {
        sql = `UPDATE posts SET Title=${newObj.Title} WHERE idposts=${_id} `
    } else if (newObj.Title === '' && newObj.main_blog !== '') {
        sql = `UPDATE posts SET main_blog=${newObj.main_blog} WHERE idposts=${_id} `
    } else {
        sql = `UPDATE posts SET ? WHERE idposts=${_id} `
    }

    conn.query(sql, newObj, (err, result) => {
        if (err) throw err
        console.log(result);
        res.redirect('/')
    })

})

module.exports = {
    updateRoute
}