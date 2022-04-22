import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { selectAnswer, setMessage, setQuiz, fetchQuiz, postAnswer } from '../state/action-creators';

// export default function Quiz(props) {
const Quiz = (props) => {

  const {
    selectAnswer,
    setMessage,
    setQuiz,
    fetchQuiz,
    quiz,
    selectedAnswer,
    infoMessage,
  } = props
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {quiz ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>
              <div className="answer">
                {quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>
            <button id="submitAnswerBtn">Submit answer</button>
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

export default connect(mapStateToProps, {selectAnswer, setMessage, setQuiz, fetchQuiz, postAnswer})(Quiz)