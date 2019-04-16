import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTodo, updateTodo, toggleCompleted} from '../actions/index'


class Todo extends Component {

    state = {
        updatedTodo: ''
    }

    
    deleteTodo = e => {
        e.preventDefault();
        this.props.deleteTodo(this.props.todo.value);
    }

    updateTodo = e => {
        e.preventDefault();
        this.props.updateTodo(this.props.todo.value, this.state.updatedTodo)
        this.setState({
            updatedTodo: ''
        })
    }

    toggleCompleted = e => {
        e.preventDefault();
        this.props.toggleCompleted(this.props.todo.value);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }


  render() {
    return (
        <div>
            <p 
            style={this.props.todo.completed ? {textDecoration: 'line-through'} : null}
            onClick={this.toggleCompleted}
            >{this.props.todo.value}</p>
            <form>
                <input
                 type="text"
                 name="updatedTodo"
                 value={this.state.updatedTodo}
                 placeholder="Update Todo..."
                 onChange={this.handleChange}
                 />
            </form>
            <button onClick={this.deleteTodo}>Delete</button>
            <button onClick={this.updateTodo}>Update</button>
        </div>
    )
  }
}

export default connect(null, {deleteTodo, updateTodo, toggleCompleted})(Todo)