const {db} = require('./db')
const app = require('./app')
const PORT = process.env.PORT || 8080

const syncedDb = `
  The database is synced! 🐘
`

const listening = [PORT, () => console.log(`

  🎧 Listening on port: ${PORT}
  http://localhost:${PORT}/

`)]

db.sync()
  .then(() => {
    console.log(syncedDb)
    app.listen(...listening)
  })
  .catch(err => {
    console.log('Problem starting the server')
    console.log(err)
  })
