import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  renderTodoList() {
    return this.props.todos.map(todo => {
      return (
        <li key={todo.id} className="list-group-item">
          {`Id: ${todo.id + 1}, Text: ${todo.text}`}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderTodoList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
