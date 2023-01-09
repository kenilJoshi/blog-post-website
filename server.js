require("dotenv").config()
console.log(process.env.DB_PASS);
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const http = require("http");
const server = http.createServer(app);
// const expressLayout = require('express-ejs-layouts')
const path = require('path')
const { homeRoute } = require('./routes/homeRoute')
const { postRoute } = require('./routes/postRoute')
const { updateRoute } = require('./routes/updateRoute')
const { deleteRoute } = require('./routes/deletePost')

const hostname = '0.0.0.0'

app.use(express.json())

// app.use(expressLayout);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

app.use(homeRoute)
app.use(postRoute)
app.use(updateRoute)
app.use(deleteRoute)

server.listen(PORT, hostname, () => {
    console.log(`server is running`);
})