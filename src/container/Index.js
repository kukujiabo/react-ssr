import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import styles from './Index.css'
import WithStyle from '../WithStyle'

function Index(props) {
  useEffect(() => {
    if (!props.list.length)
      props.getIndexList(window.location.host)
  }, [])
  /**
   * 如果在这里请求数据就可以首页在服务器端渲染数据
   */
  return <div className={styles.container}>
    <h1 className={styles.title}>Index Page.</h1>
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
Index.loadData = (store) => {
  const host = '127.0.0.1:3000'
  return store.dispatch(getIndexList(host))
}
export default connect(
  state=>({ list: state.index.list }),
  {getIndexList}
)(WithStyle(Index, styles))

