import React, { useState } from 'react';

/**
 * 不是很熟悉 react 语法所以写个样式试试
 */
const btnStyle = {
  fontSize: '12px',
  height: '30px',
  width: '56px',
  lineHeight: '28px',
  fontWeight: 600,
  borderRadius: '5px',
  outline: 'none'
}

function App(props) {
  const [ count, setCount ] = useState(1)
  const jsxContent = <div>
    <h1>{props.title}</h1>
    <p>累加结果: {count}</p>
    <button style={btnStyle} onClick={_ => setCount(count + 1)}>累加</button>
  </div>
  return jsxContent
}

const title = 'React ssr lesson 1.'

export default <App title={title}></App>