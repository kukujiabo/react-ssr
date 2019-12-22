import React, { useState } from 'react'
import styles from './About.css'
import WithStyle from '../WithStyle'

function About(props) {
  const jsxStr = <div>
    <h1 className={styles.title}>About Us.</h1>
  </div>
  return jsxStr
}

export default WithStyle(About, styles)

