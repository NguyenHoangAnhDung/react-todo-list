import { combineReducers } from 'redux'
import AddTodoReducer from './reducer_add_todo'

const rootReducer = combineReducers({
  todos: AddTodoReducer
})

export default rootReducer
