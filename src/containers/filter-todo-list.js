import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterTodo } from '../actions/index'

class FilterTodoList extends Component {
  handleClick(filterOption) {
    this.props.dispatch(filterTodo(filterOption))
  }

  renderFilterList() {
    const filterOptions = ['ALL', 'IN PROGRESS', 'RESOLVED']
    return filterOptions.map(filterOption =>
      (
        <li key={filterOption}>
          <a href="#" onClick={() => this.handleClick(filterOption)}>{filterOption}</a>
        </li>
      )
    )
  }

  render() {
    return (
      <ul className="group-same-line">
        {this.renderFilterList()}
      </ul>
    )
  }
}

export default connect()(FilterTodoList)
