const express = require('express')
const app = express()
const port = 6000

app.use((req, res, next)=> {
    console.log('m1')
    res.send('middleware')
    next()
  })
app.use((req, res, next)=> {
    console.log('m2')
    next()
  })

app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})