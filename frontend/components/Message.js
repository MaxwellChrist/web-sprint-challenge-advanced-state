import React from 'react'
import { connect } from 'react-redux';
import { setMessage, postQuiz } from '../state/action-creators';

// export default function Message(props) {
export function Message(props) {

  const setMessage = props.setMessage
  const infoMessage = props.infoMessage

  return <div id="message">Nice job!</div>
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage,
  }
}

export default connect(mapStateToProps, {setMessage, postQuiz })(Message)