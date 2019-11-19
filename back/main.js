require('dotenv').config()

const express = require('express')
const cors = require('cors');

const area = require('./report')

const app = express()
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({info: 'morkro coding-challenge'})
})

app.get('/reports', report.getReports)
app.put('/reports/:id', report.resolveReport) //resolve
app.post('/block/:id', report.blockContent) // block content

app.listen(process.env.serverPort, (err) => {
    if (err) {
        return console.log('Internal error', err)
    }
    console.log(`server is listening on ${process.env.serverPort}`)
})
