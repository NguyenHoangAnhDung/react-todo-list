import { combineReducers } from 'redux'
import ReducerTodos from './reducer_todo'

const rootReducer = combineReducers({
  reducer_todos: ReducerTodos
})

export default rootReducer
