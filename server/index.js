/**
 * 这部分代码在服务器端运行，返回一个静态html页面
 * 
 * 创建web服务，并解析首页结构，当请求访问此web服务时，
 * 返回一个已经渲染好的静态页面
 * 
 * 通过babel转译，server.js 可以直接使用 es6 标准编写
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()

/**
 * 设置服务器静态资源目录
 */
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(App)
  const htmlString = `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>My react ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
  res.send(htmlString)
})

app.listen(3000, _ => {
  console.log('App is listenning at port:3000')
})