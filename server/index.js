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
import {StaticRouter, matchPath, Route }  from 'react-router-dom'
import {getServerStore} from '../src/store/store'
import Header from '../src/components/Header'
import {Provider} from 'react-redux'
import proxy from 'http-proxy-middleware'
import express from 'express'
import routes from '../src/App'
// import axios from 'axios'

const app = express()

const store = getServerStore()

// const forward = axios.create({
//   baseURL: 'http://127.0.0.1:8080',
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
// })

/**
 * 设置服务器静态资源目录
 */
app.use(express.static('public'))

/**
 * 匹配 前缀是 /api/的 路由，匹配成功则转发到 mock 的接口
 */
// app.get('/api/*', (req, res) => {
//   forward({
//     method: req.method.toLocaleLowerCase(),
//     url: req.originalUrl,
//     data: req.body
//   }).then(res2 => {
//     res.send(res2.data)
//   }).catch(err => {
//     // todo
//   })
// })

/**
 * 使用 proxy 更方便
 */
app.get('/api/*', proxy({ target: 'http://127.0.0.1:8080', changeOrigin: true }))

/**
 * 包裹一层promise 捕获异常，这样 promise.all 就不会接收到异常
 * @param {*} promiseFunc 
 */
const promiseWrapper = (pendingPromise) => {
  // return new Promise((resolve, reject) => {
  //   resolve(pendingPromise)
  // }).then(res => {
  //   console.log(res, 'success.')
  // }).catch(err => {
  //   console.log(err, 'error.')
  // })
  /**
   * catch 即可 2019-12-16 01:43 
   */
  pendingPromise.catch(err => {
    console.log('error occur: ', err)
  }) 
}

app.get('*', (req, res) => {
  const promises = []
  routes.some(route => {
    const match = matchPath(req.path, route)
    if (match) {
      const {loadData} = route.component
      if (loadData) {
        promises.push(loadData(store))
      }
    }
  })
  Promise.all( promises.map(promis => { return promiseWrapper(promis) }) ).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {
            routes.map(route => <Route {...route}></Route>)
          }
        </StaticRouter>
      </Provider>
    )
    const htmlString = `
      <html>
        <head>
          <meta charset="utf-8" />
          <title>My react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `
    res.send(htmlString)
  }).catch(err => {
    res.send('报错了')
  })

})

app.listen(3000, _ => {
  console.log('App is listenning at port:3000')
})