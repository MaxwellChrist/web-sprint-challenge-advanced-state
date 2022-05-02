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

  const onChange = evt => {
    // const newInputId = evt.target
    // const newValue = evt.target.value
    // inputChange({ newInputId, newValue })
    const { name, value } = evt.target
    inputChange({ name, value })
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz({question_text: form.newQuestion, true_answer_text: form.newTrueAnswer, false_answer_text: form.newFalseAnswer})
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} name="newQuestion"  value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} name="newTrueAnswer" value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} name="newFalseAnswer" value={form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
