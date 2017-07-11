import React, { Component } from 'react'
import AddTodo from '../containers/add-todo'
import TodoList from '../containers/todo-list'
import FilterTodoList from '../containers/filter-todo-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <FilterTodoList />
      </div>
    )
  }
}
