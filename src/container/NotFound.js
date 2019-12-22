import React from 'react'
import {Route} from 'react-router-dom'

function Status({ code, children }) {
  return <Route render={({staticContext}) => {
      if (staticContext) {
        staticContext.statuscode=code
      }
      return children
    }}>
  </Route>
}

function NotFound(props) {
  return <Status code={404}>
    <div>
      <h1>空！</h1>
      <img id="empty_404" src="/404.jpeg"></img>
    </div>
  </Status>
}

export default NotFound