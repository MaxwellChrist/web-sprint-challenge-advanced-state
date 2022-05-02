import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { selectAnswer, fetchQuiz, postAnswer, setQuiz } from '../state/action-creators';

const Quiz = (props) => {

  const [stop, setStop] = useState(true);

  const {
    selectAnswer, 
    selectedAnswer, 
    fetchQuiz, 
    postAnswer, 
    quiz,
     setQuiz
  } = props
  
  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }
  }, [])

  useEffect(() => {
    handleStop()
  }, [selectedAnswer])

  const handleStop = () => {
    if(selectedAnswer) {
      return setStop(false)
    } else {
      return stop
    }
  }

  console.log(quiz)

  const handleAnswer = (answer) => {
    selectAnswer(answer);
  }

  const handleSubmit = (quiz_id) => {
    postAnswer({quiz_id, answer_id: selectedAnswer})
    setStop(true)
  }

  return (
    <div id="wrapper">
      {quiz ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === quiz.answers[0].answer_id ? "selected" : ""}`}>
                {quiz.answers[0].text}
                <button onClick={() => handleAnswer(quiz.answers[0].answer_id)}>
                  {`${selectedAnswer === quiz.answers[0].answer_id ? "SELECTED" : "Select"}`}
                </button>
              </div>
              <div className={`answer ${selectedAnswer === quiz.answers[1].answer_id ? "selected" : ""}`}>
                {quiz.answers[1].text}
                <button onClick={() => handleAnswer(quiz.answers[1].answer_id)}>
                  {`${selectedAnswer === quiz.answers[1].answer_id ? "SELECTED" : "Select"}`}
                </button>
              </div>
            </div>
            <button onClick={() => handleSubmit(quiz.quiz_id)} id="submitAnswerBtn" disabled={`${stop ? "disabled" : ""}`}>Submit answer</button>
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
  }
}

export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer })(Quiz)