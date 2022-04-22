import React from 'react'
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

// export default function Wheel(props) {
  const Wheel = (props) => {

  //props deconstruction
  const wheel = props.wheel;
  const moveClockwise = props.moveClockwise;
  const moveCounterClockwise = props.moveCounterClockwise;
  const position = props.wheel.position

  // helper functions for button clicks
  const handleClockwise = () => {
    moveClockwise()
  }

  const handleCounterClockwise = () => {
    moveCounterClockwise()
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${position == 0 ? "active" : "cog"}`} style={{ "--i": 0 }}>{position == 0 ? "B" : ""}</div>
        <div className={`cog ${position == 1 ? "active" : "cog"}`} style={{ "--i": 1 }}>{position == 1 ? "B" : ""}</div>
        <div className={`cog ${position == 2 ? "active" : "cog"}`}style={{ "--i": 2 }}>{position == 2 ? "B" : ""}</div>
        <div className={`cog ${position == 3 ? "active" : "cog"}`} style={{ "--i": 3 }}>{position == 3 ? "B" : ""}</div>
        <div className={`cog ${position == 4 ? "active" : "cog"}`} style={{ "--i": 4 }}>{position == 4 ? "B" : ""}</div>
        <div className={`cog ${position == 5 ? "active" : "cog"}`} style={{ "--i": 5 }}>{position == 5 ? "B" : ""}</div>
      </div>
      <div id="keypad">
        <button  onClick={handleCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClockwise}id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect ((s) => s, {moveClockwise, moveCounterClockwise})(Wheel);