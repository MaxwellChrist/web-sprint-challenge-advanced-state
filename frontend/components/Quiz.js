import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { dispatch, selectAnswer, selectedAnswer, setMessage, setQuiz, fetchQuiz, postAnswer, postQuiz } from '../state/action-creators';

const Quiz = (props) => {

  const {
    selectAnswer,
    setMessage,
    setQuiz,
    fetchQuiz,
    quiz,
    selectedAnswer,
    infoMessage,
    postQuiz,
  } = props
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  const handleFirstAnswer = (answer) => {
    console.log("first: ", answer);
    selectAnswer(answer);
  }

  const handleSecondAnswer = (answer) => {
    console.log("second: ", answer);
    selectAnswer(answer);
  }

  // const handleSubmit = (quiz) => {
  //   postQuiz({ quiz, selectAnswer })
  // }

  console.log("this");

  return (
    <div id="wrapper">
      {quiz ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0].text}
                <button onClick={() => handleFirstAnswer(quiz.answers[0].answer_id)}>SELECTED</button>
              </div>
              <div className="answer">
                {quiz.answers[1].text}
                <button onClick={() => handleSecondAnswer(quiz.answers[1].answer_id)}>SELECTED</button>
              </div>
            </div>
            <button onClick={() => handleSubmit(quiz.quiz_id)} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  }
}

export default connect(mapStateToProps, {selectAnswer, setMessage, setQuiz, fetchQuiz, postAnswer, postQuiz })(Quiz)