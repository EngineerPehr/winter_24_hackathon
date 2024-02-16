var path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const express = require('express')
const cors = require('cors')

const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')

var indexRouter = require('./src/routes/index')
var dataRouter = require('./data/data.router')

var app = express()

app.use(cors())
app.use(express.json())

app.use('/', indexRouter)
app.use('/data', dataRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
