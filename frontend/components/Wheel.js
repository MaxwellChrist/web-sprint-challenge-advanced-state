import React, { useState } from 'react'
import { connect } from 'react-redux';

// export default function Wheel(props) {
  const Wheel = (props) => {

  const wheel = props.wheel;
  const start = props.wheel.start;
  const wheelArray = props.wheel.wheelArray;


  console.log("This is props", props);
  console.log("This is the wheel", wheel);
  console.log("This is the start", start);
  console.log("This is the wheelArray", wheelArray);

  const handleClockwise = {

  }

  const handleCounterClockwise = {
    
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${start == 0 ? "active" : "cog"}`} style={{ "--i": 0 }}>{wheel ? "B" : ""}</div>
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button  onClick={handleCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClockwise}id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect ((s) => s)(Wheel);