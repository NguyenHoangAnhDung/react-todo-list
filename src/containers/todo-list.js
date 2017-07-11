import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import { bindActionCreators } from 'redux'

class TodoList extends Component {
  renderTodoList() {
    return this.props.todos.map(todo => {
      const classNames = `list-group-item ${todo.completed? 'through-out-decoration' : ''}`
      return (
        <li
          key={todo.id}
          className={classNames}
          onClick={() => this.props.toggleTodo(todo)}
          >
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo: toggleTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
