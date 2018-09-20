import express from "express"
import CONFIG from './config'
import { initDb } from './db'
import controllers from './controller'
import bodyParser from 'body-parser'
import io from 'socket.io'
import http from 'http'

const app = express()
app.use(bodyParser.json())


app.use('/api', controllers)
app.use((req, res) => {
  res.json('404')
})

initDb(CONFIG.mongo).then(res => {
  const server = http.createServer(app)
  const ws = io(server)
  ws.on('connect', function(socket){
    console.log('ws connected')
    socket.on('msg', function(e) {
      //TODO 过滤
      // const msg = JSON.parse(e)
      console.log('received', e)
      socket.emit('msg', e)
      // simulate feedback
      setTimeout(() => {
        socket.emit('server-push', {
          from: '2324',
          to: '5ba2706faaa8c62549cdfc01',
          time: +(Date.now()),
          msg: '我现在不在'
        })
      }, 2000);
    })
  })
  server.listen(CONFIG.port, () => {console.log('statred at 8080')})
}).catch(err => {
  console.log('database init fail')
  process.exit(2)
})
