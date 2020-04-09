const express = require('express')
const app = express()
const submit = require('./submit')

app.use(express.json())
app.use(express.static('public'))


app.post('/submit', (req, res)=>{
  const {firstName, lastName} = req.body
  const response  = submit(firstName, lastName)
  res.json({response})
})
app.listen(3000)
