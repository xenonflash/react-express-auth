import express from "express"
import CONFIG from './config'
import { initDb } from './db'
import routes from './controller'

const app = express()

app.use(routes)

initDb(CONFIG.mongo).then(res => {
  app.listen(CONFIG.port, () => {console.log('statred at 8080')})
}).catch(err => {
  console.log('database init fail')
})


