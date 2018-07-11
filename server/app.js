const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
module.exports = app

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// If you want to add routes, they should go here!
app.use('/api', require('./api'))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err.message)
  console.error(err.stack)
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})
