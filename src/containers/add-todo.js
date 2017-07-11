import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const todoText = this.todoText.value
    if(!todoText) {
      return
    }
    this.props.dispatch(addTodo(todoText))
    this.todoText.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => { this.todoText = input }} />
          <button>Add new</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
