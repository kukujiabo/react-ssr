import Index from './container/Index'
import About from './container/About'
import User from './container/User'
import NotFound from './container/NotFound'
import Login from './container/Login'
// import './App.css'

// export default (
//   <div> 
//     <Route path="/" exact component={Index}></Route>
//     <Route path="/about" exact component={About}></Route>
//   </div>
// )

export default [
  {
    path: '/',
    component: Index,
    exact: true,
    key: 'index'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
  },
  {
    path: '/user',
    component: User,
    exact: true,
    key: 'user'
  },
  {
    path: '/404',
    component: NotFound,
    exact: true,
    key: 'notfound'
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]