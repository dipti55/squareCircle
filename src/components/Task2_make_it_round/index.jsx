import React from 'react'
import styles from "./index.module.css"
import Box from './Box'
import { useState } from 'react'

const Task2 = () => {
    const inputBox = {
        width: "25rem",
        padding: "0.8rem",
        margin: "1rem",
        fontSize: "16px",
        outline:"none"
      };
    const [number, setNumber] = useState()

    const css = {
        display:"flex", margin:"1rem"
    }
  return (
    <div id={styles.container}> 
    <center>
        <h1 style={{ fontSize: "60px"}}>
            <font color="#FF2626">M</font>
            <font color="#252A34">a</font>
            <font color="#F400A1">k</font>
            <font color="#FFD523">e </font>
            <font color="#71EFA3">it </font>
            <font color="#0F52BA">R</font>
            <font color="#66CC66">o</font>
            <font color="#FF9966">u</font>
            <font color="#FFCCCC">n</font>
            <font color="#00C1D4">d</font>
            {/* <font color="#EFE3D0">s</font> */}
        </h1>
    </center>
    <input type="number" onChange={(e)=>setNumber(e.target.value)} style={inputBox} placeholder='Enter number between 1-5'/>
    {number?
    number<1||number>5? (alert("Number Out of range")
    ):
    (<div style={css}>
    <Box val={1} number={number} />
    <Box val={2} number={number} />
    <Box val={3} number={number} />
    <Box val={4} number={number} />
    <Box val={5} number={number} />
    </div> ):(
        <>
        <div style={css}>
        <Box val={1} number={number} />
    <Box val={2} number={number} />
    <Box val={3} number={number} />
    <Box val={4} number={number} />
    <Box val={5} number={number} />
    </div>
    </>
    )}

    </div>
  )
}

export default Task2