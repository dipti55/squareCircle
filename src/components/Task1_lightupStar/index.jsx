import React, { useState } from "react";
import styles from "./index.module.css";
import Star from "./Star";

const Task1 = () => {
  const [color, setColor] = useState("white");
  const inputBox = {
        width: "25rem",
        padding: "0.8rem",
        margin: "1rem",
        fontSize: "16px",
        outline:"none"
      };
  return (
    <>
  
      <div id={styles.container}>
      <center>
        <h1 style={{ fontSize: "60px"}}>
            <font color="#FF2626">L</font>
            <font color="#00d4ff">i</font>
            <font color="#F400A1">g</font>
            <font color="#FFD523">h</font>
            <font color="#71EFA3">t </font>
            <font color="#0F52BA">U</font>
            <font color="#66CC66">p </font>
            <font color="#FF9966">the </font>
            <font color="#FFCCCC">S</font>
            <font color="#00C1D4">T</font>
            <font color="#EFE3D0">A</font>
            <font color="#FF2626">R</font>

        </h1>
    </center>
        <input
          type="text" style={inputBox}
          placeholder="Please enter valid color"
          onChange={(e) => setColor(e.target.value)}
        />
        <h1 style={{ color: color, fontSize: "300%", textAlign: "center" }}>MAXOTAG TECHNOLOGY</h1>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Star color={color} />
          <Star color={color} />
          <Star color={color} />
        </div>
      </div>
    </>
  );
};

export default Task1;
