import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions/index'


class Todo extends Component {

    
    deleteTodo = e => {
        this.props.deleteTodo(this.props.todo.value);
    }

  render() {
    return (
        <div>
            <p>{this.props.todo.value}</p>
            <button onClick={this.deleteTodo}>Delete</button>
        </div>
    )
  }
}

export default connect(null, {deleteTodo})(Todo)