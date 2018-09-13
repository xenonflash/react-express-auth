import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('got it')
})

app.listen(8080, () => {console.log('statred at 8080')})
