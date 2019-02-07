const express = require('express')
const fs = require('fs')
var cors = require('cors') //added by Alexandros Botzis

const api = express()
api.use(cors()) //added by Alexandros Botzis

api.get('/houses', (req, res) => {
  res.setHeader('Vary', 'Accept')
  res.setHeader('Accept', 'GET, OPTIONS')

  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync(__dirname + '/fixtures/houses.json')))
  }, 2000)
})

api.listen(1337, () => console.log('API running on http://localhost:1337\nCtrl+C to exit'))

