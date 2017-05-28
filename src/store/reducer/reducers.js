import { combineReducers } from 'redux'
import { aaa } from '../actions/actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case aaa:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp