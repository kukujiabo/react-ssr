import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  const jsxStr = <div>
    <Link to="/">Index</Link> | <Link to="/about">About Us</Link> | <Link to="/user">User</Link> | <Link to="/404"> 404 </Link>
  </div>
  return jsxStr
}

export default Header

