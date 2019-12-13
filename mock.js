const express = require('express')

const app = express()

app.get('/api/course/list', (req, res) => {
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

app.get('/api/user/list', (req, res) => {
  res.json({
    code: 0,
    list: [
      { name: 'you', id: 1 },
      { name: 'and', id: 2 },
      { name: 'me', id: 3 }
    ]
  })
})

app.listen(8080, _ => {
  console.log('Data mock finished.')
})