import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { selectAnswer, setMessage, setQuiz, fetchQuiz, postAnswer } from '../state/action-creators';

// export default function Quiz(props) {
const Quiz = (props) => {

  // console.log(props);

  const {
    selectAnswer,
    setMessage,
    setQuiz,
    fetchQuiz,
    quiz,
    selectedAnswer,
    infoMessage,
  } = props

  // console.log(selectAnswer);
  // console.log(setMessage);
  // console.log(setQuiz);

  console.log(quiz);
  // console.log(selectedAnswer);
  // console.log(infoMessage);
  
  useEffect(() => {
    fetchQuiz()
  }, [])


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
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
    quizStuff: state.quiz,
    selectedAnswerStuff: state.selectedAnswer,
    infoMessageStuff: state.infoMessage,
  }
}

export default connect(mapStateToProps, {selectAnswer, setMessage, setQuiz, fetchQuiz, postAnswer})(Quiz)