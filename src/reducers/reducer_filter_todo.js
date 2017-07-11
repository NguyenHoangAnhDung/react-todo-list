const getVisibleTodos = (todos, filter) => {
  switch(filter) {
  case 'IN PROGRESS':
    return todos.filter(t => t.completed)
  case 'RESOLVED':
    return todos.filter(t => !t.completed)
  default:
    return todos
  }
}

const FilterTodoReducer = (state = [], action) => {
  switch(action.type) {
  case 'FILTER_TODO_LIST':
    return getVisibleTodos(state, action.filterText)
  default:
    return state
  }
}

export default FilterTodoReducer
