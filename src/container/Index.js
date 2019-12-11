import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import {get} from 'http'

function Index(props) {
  useEffect(() => {
    props.getIndexList()
  }, [])
  /**
   * 如果在这里请求数据就可以首页在服务器端渲染数据
   */
  return <div>
    <h1>Index Page.</h1>
    <hr/>
    <div>
      <ul>
        {
          props.list.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  </div>
}

export default connect(
  state=>({ list: state.index.list }),
  {getIndexList}
)(Index)

