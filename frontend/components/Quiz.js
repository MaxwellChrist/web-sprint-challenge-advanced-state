import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer, setMessage, setQuiz } from '../state/action-creators';

// export default function Quiz(props) {
const Quiz = (props) => {

  console.log(props);

  const selectAnswer = props.selectAnswer;
  const setMessage = props.setMessage;
  const setQuiz = props.setQuiz

  console.log(selectAnswer);
  console.log(setMessage);
  console.log(setQuiz);

  // console.log(quizStuff);
  // console.log(selectedAnswerStuff);
  // console.log(infoMessageStuff);
  

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

export default connect(mapStateToProps, {selectAnswer, setMessage, setQuiz})(Quiz)