import { combineReducers } from 'redux'
import AddTodoReducer from './reducer_add_todo'
import FilterTodoReducer from './reducer_filter_todo'

const rootReducer = combineReducers({
  todos: AddTodoReducer,
  filterTodo: FilterTodoReducer
})

export default rootReducer
