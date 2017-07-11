import React, { Component } from 'react'
import AddTodoList from '../containers/add-todo-list'
import TodoList from '../containers/todo-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoList />
        <TodoList />
      </div>
    )
  }
}
