require('dotenv').config()

const express = require('express')
const cors = require('cors');

const report = require('./report')
const common = require('./common')

const app = express()
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({info: 'morkro coding-challenge'})
})

app.get('/reports', report.getReports)
app.put('/reports/:id', report.resolveReport) //resolve
app.post('/block/:id', report.blockContent) // block content
app.get('/states', common.getStates)
app.get('/types', common.getTypes)

app.listen(process.env.serverPort, (err) => {
    if (err) {
        return console.log('Internal error', err)
    }
    console.log(`server is listening on ${process.env.serverPort}`)
})
