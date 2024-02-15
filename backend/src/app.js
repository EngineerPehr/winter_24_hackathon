var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('../routes/index')
var usersRouter = require('../routes/users')

var app = express()
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_DEVELOPMENT,
  ssl: {
    rejectUnauthorized: false
  }
})

app.get('/some-route', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM your_table')
    const results = { results: result ? result.rows : null }
    res.render('your-view', results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
