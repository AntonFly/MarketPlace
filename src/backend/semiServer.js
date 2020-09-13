// const config = require('../stories/tests/config')

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const { promisify } = require('util')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PUT')
        res.send()
    })
})



app.get('/check', (req, res) => {
    res.send("Hello, world")
})

app.get('/search', (req, res) => {
    res.send("Seach, page")
})

app.put('/:type', (req, res) => {
    changeFile(req.params.type, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
})

app.get('/product/:id', (req, res) => {
    res.send({Name: 'Sinkers'})
})

app.put('/:type', (req, res) => {
})


app
    .listen(port, () => {
        console.log(`server is listening on ${port}`)
    })
    .on('error', err => console.error(err))
