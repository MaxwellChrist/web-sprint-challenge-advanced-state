import axios from 'axios';
import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE, 
  INPUT_CHANGE, 
  RESET_FORM 
} from "./action-types"


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { 
  return { type: MOVE_CLOCKWISE }
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE }
 }

export function selectAnswer(data) { 
  return { type: SET_SELECTED_ANSWER, payload: data  }
}

export function setMessage(data) { 
  return { type: SET_INFO_MESSAGE, payload: data }
}

export function setQuiz(data) { 
  return { type: SET_QUIZ_INTO_STATE, payload: data }
}

export function inputChange({ name, value}) { 
  return { type: INPUT_CHANGE, payload: {name, value} }
}

export function resetForm() { 
  return { type: RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

    dispatch(setQuiz(null))
    axios.get("http://localhost:9000/api/quiz/next") 
      .then((res) => {
        dispatch(setQuiz(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
    }
}
export function postAnswer(item) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post("http://localhost:9000/api/quiz/answer", item) 
    .then((res) => {
      dispatch(selectAnswer(null))
      dispatch(setMessage(res.data.message));
      dispatch(fetchQuiz())
    })
    .catch((err) => {
      debugger
      console.log(err)
    })
  }
}
export function postQuiz(item) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form

    axios.post('http://localhost:9000/api/quiz/new', item)
    .then((res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    }))
    .catch(err => {
      console.log(err);
      debugger
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
