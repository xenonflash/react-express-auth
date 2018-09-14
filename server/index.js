import express from "express"
import CONFIG from './config'
import { initDb } from './db'
import controllers from './controller'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())


app.use('/api', controllers)
app.use((req, res) => {
  res.json('404')
})

initDb(CONFIG.mongo).then(res => {
  app.listen(CONFIG.port, () => {console.log('statred at 8080')})
}).catch(err => {
  console.log('database init fail')
})


