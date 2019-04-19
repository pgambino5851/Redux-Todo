import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {addTodo, deleteCompleted} from '../actions/index'

class TodoList extends Component {

    state = {
        todo: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    deleteCompleted = e => {
        e.preventDefault();
        this.props.deleteCompleted();
    }

    render() {
        return (
        <div>
            <h1>Todo List</h1>
            {this.props.todos.map(todo => {
                return <Todo todo={todo} />
            })}
            <form>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    placeholder='Add todo...'
                    onChange={this.handleChange}
                />
            </form>
            <button onClick = {this.addTodo}>Submit Todo</button>
            <button onClick = {this.deleteCompleted}>Delete Completed Tasks</button>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, deleteCompleted})(TodoList)