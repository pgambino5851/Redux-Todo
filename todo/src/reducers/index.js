import {ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_COMPLETED, DELETE_COMPLETED} from '../actions/index'

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        },

        {
            value: 'Feed the cat',
            completed: false
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    console.log("Reducer is working")
    switch(action.type) {
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, 
                {
                    value: action.payload,
                    completed: false
                }
            ]
            }
        case DELETE_TODO:
        console.log("Delete todo payload:", action.payload)
            return{
                ...state,
                todos:[...state.todos.filter(todo => { 
                   return todo.value !== action.payload
                })]
            }
        case UPDATE_TODO:
            console.log('Update todo payload:', action.payload);
            return{
                ...state,
                todos:[...state.todos.map(todo => {
                    if (todo.value === action.payload.originalTodo){
                        return {
                         ...state.todo,
                            value: action.payload.updatedTodo, 
                            completed: false
                            }
                        ;
                    } else{
                        return todo;
                    }
                    
                })]
            }
        case TOGGLE_COMPLETED:
        console.log("Toggle completed action payload",action.payload)
            return{
                ...state,
                todos:[...state.todos.map(todo => {
                    if(todo.value === action.payload) {
                        return{
                            ...todo,
                            completed: !state.completed
                        }
                    }
                    else{
                        return todo;
                    }
                })]
            }
        case DELETE_COMPLETED:
        return{
            ...state, 
            todos:[...state.todos.filter(todo => {
                return !todo.completed
            })]
        }
        default:
            return state;
    }
}