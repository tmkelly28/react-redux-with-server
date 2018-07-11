const router = require('express').Router()

// api routes go here

router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 404
  next(err)
})

module.exports = router
