let nextTodoId = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}

export const toggleTodo = todo => {
  return {
    type: 'TOGGLE_TODO',
    id: todo.id
  }
}

export const filterTodo = filterText => {
  return {
    type: 'FILTER_TODO_LIST',
    filterText
  }
}
