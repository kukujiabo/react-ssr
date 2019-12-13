/**
 * hydrate 
 * 
 * 这部分代码编译后在前端运行
 * 
 * 此段代码编译成一个静态.js 文件，并被后端渲染好的页面引入，
 * 由于其构建的虚拟dom结构以及绑定的相关操作和后端渲染的静态
 * 页面保持一致，所以而在注入后端渲染好的页面后，可以对页面进
 * 行操作。
 */

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import routes from '../src/App'
import {getClientStore} from '../src/store/store'
import Header from '../src/components/Header'
import {Provider} from 'react-redux'

const Page = (<Provider store={getClientStore()}>
  <BrowserRouter>
    <Header></Header>
    {routes.map(route => <Route {...route}></Route>)}
  </BrowserRouter>
</Provider>)

ReactDom.hydrate(Page, document.getElementById('root'))