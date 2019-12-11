const express = require('express')

const app = express()

app.get('/api/course/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'GET')
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.json({
    code: 0,
    list: [
      { name: '1', id: 1 },
      { name: '22', id: 2 },
      { name: '333', id: 3 },
      { name: '4444', id: 4 }
    ]
  })
})

app.listen(8080, _ => {
  console.log('Data mock finished.')
})