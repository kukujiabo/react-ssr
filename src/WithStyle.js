import React from 'react'

function WithStyle(Comp, styles) {
  return function (props) {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss())
    }
    return <Comp {...props} />
  }
}

export default WithStyle