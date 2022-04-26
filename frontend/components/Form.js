import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {
    setMessage,
    infoMessage,
    postQuiz,
    inputChange,
    form  
  } = props

  console.log(form)

  const onChange = () => {

  }

  // const onChange = evt => {
  //   const { inputId, value } = evt.target
  //   inputChange({ inputId, value })
  // }

  // const onChangeNewQuestion = evt => {
  //   const { value } = evt.target;
  //   const { inputId } = "newQuestion";
  //   inputChange({ inputId, value })
  // }

  // const onChangeNewTrueAnswer = evt => {
  //   const { value } = evt.target;
  //   const { inputId } = "newTrueAnswer";
  //   inputChange({ inputId, value })
  // }

  // const onChangeNewFalseAnswer = evt => {
  //   const { value } = evt.target;
  //   const { inputId } = "newFalseAnswer";
  //   inputChange({ inputId, value })
  // }

  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
