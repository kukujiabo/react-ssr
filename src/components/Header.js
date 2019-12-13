import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  const jsxStr = <div>
    <Link to="/">Index</Link> | <Link to="/about">About Us</Link>
  </div>
  return jsxStr
}

export default Header

