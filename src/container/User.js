import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../store/user'
import {Redirect} from 'react-router-dom'

function User(props) {
  useEffect(() => {
    if (!props.ulist.length)
      props.getUserList(window.location.host)
  }, [])
  if (!props.location.search) {
    return <Redirect to="/login"></Redirect>
  }
  /**
   * 如果在这里请求数据就可以首页在服务器端渲染数据
   */
  return <div>
    <h1>User Page.</h1>
    <hr/>
    <div>
      <ul>
        {
          props.ulist.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  </div>
}
User.loadData = (store) => {
  const host = '127.0.0.1:3000'
  return store.dispatch(getUserList(host))
}
export default connect(
  state=>({ ulist: state.user.ulist }),
  {getUserList}
)(User)

