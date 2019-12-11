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
import {BrowserRouter} from 'react-router-dom'
import App from '../src/App'
import store from '../src/store/store'
import {Provider} from 'react-redux'

const Page = (<Provider store={store}>
  <BrowserRouter>
    {App}
  </BrowserRouter>
</Provider>)
ReactDom.hydrate(Page, document.getElementById('root'))