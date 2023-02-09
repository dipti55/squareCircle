import React from 'react'
import styles from "./Star.module.css"

const Star = ({color}) => {
  return (
    <>
    <div id={styles.Star} style={{backgroundColor: color}}></div>
    {/* <h1>{color}</h1> */}
    </>
  )
}

export default Star;