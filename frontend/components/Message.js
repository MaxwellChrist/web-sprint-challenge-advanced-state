import React from 'react'
import { connect } from 'react-redux';
import { setMessage, postQuiz } from '../state/action-creators';

export function Message(props) {
  const setMessage = props.setMessage
  const infoMessage = props.infoMessage
  return <div id="message">{infoMessage}</div>
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage,
  }
}

export default connect(mapStateToProps, {setMessage, postQuiz })(Message)