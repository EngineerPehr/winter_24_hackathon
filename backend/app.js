var path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const express = require('express')
const cors = require('cors')

const errorHandler = require('./src/errors/errorHandler')
const notFound = require('./src/errors/notFound')

var indexRouter = require('./src/routes/index')
var usersRouter = require('./src/users/users.router')

var app = express()

app.use(cors())
app.use(express.json())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
