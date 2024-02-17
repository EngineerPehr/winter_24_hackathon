var path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const express = require('express')
const cors = require('cors')

const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')

var dataRouter = require('./data/data.router')
var usersRouter = require('./users/users.router')

var app = express()

app.use(cors())
app.use(express.json())

app.use('/data', dataRouter)
app.use('/users', usersRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
