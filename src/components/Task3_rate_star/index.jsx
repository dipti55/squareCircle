import React from 'react'
import styles from "./index.module.css"
import { Ratestar } from './Ratestar'


const Task3 = () => {
  return (
    <>
    <div className={styles.container}>
    <h1 style={{textAlign:"center"}}> Task3</h1>
    <div style={{display:"flex", paddingLeft:"11rem"}}>
    <Ratestar/>
    <Ratestar/>
    <Ratestar/>
    <Ratestar/>
    <Ratestar/>

    </div>
    </div>

    </>
  )
}

export default Task3