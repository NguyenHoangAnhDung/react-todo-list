import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions/index'

class AddTodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoText: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if(!this.state.todoText) {
      return ;
    }
    this.props.addTodo(this.state.todoText)
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" value={this.state.todoText} onChange={e => this.handleChange(e)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reducer_todos: state.reducer_todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(mapDispatchToProps, mapDispatchToProps)(AddTodoList)
